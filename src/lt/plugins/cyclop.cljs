(ns lt.plugins.cyclop
  (:require [lt.object :as object]
            [lt.objs.tabs :as tabs]
            [lt.util.dom :as dom]
            [lt.objs.console :as console]
            [lt.objs.command :as cmd])
  (:require-macros [lt.macros :refer [defui behavior]]))

(def example-data [[0 150][1 200][2 300][3 250][4 370]])

(def state (atom {:mode :raw
                  :data example-data}))

(def modes {:raw "Raw"
            :boxes "Pretty boxes"
            :graph "2D-graph"})

(defui mode-button [this mode-keyword]
  (let [title (get modes mode-keyword "MISSING")]
    [:button.mode-button {:id (name mode-keyword)} title])
  :click #(object/raise this :select-mode mode-keyword))

(defui mode-selection-bar [this]
  [:div.menu
   [:ul
    [:li (mode-button this :raw)]
    [:li (mode-button this :boxes)]
    [:li (mode-button this :graph)]]])

(defui mode-raw [this]
  [:div.raw
   [:h2 "Enter data here:"]
   [:input {:value (str (:data @state))}]])

(defui mode-boxes [this]
  [:div.boxes
   [:h1 "Pretty boxes"]])

(defui mode-graph [this]
  [:div.graph
   [:h1 "2D-graph"]])

(defui inspector [this]
  [:div.inspector
   (mode-raw this)
   (mode-boxes this)
   (mode-graph this)])

(defui full-panel [this]
  [:div.full
   (mode-selection-bar this)
   (inspector this)])

(defn get-selected-mode-button []
  (dom/$ (str "#" (name (:mode @state)))))

(defn get-mode-buttons []
  (dom/$$ ".mode-button"))

(defn inspectors-for-keys []
  (let [modes [:raw :boxes :graph]
        divs (map #(dom/$ (str "." (name %))) modes)]
    (zipmap modes divs)))

(defn refresh-ui [this]
  (let [mode-buttons (get-mode-buttons)
        selected-mode-button (get-selected-mode-button)]
    (doseq [b mode-buttons]
      (dom/remove-class b :selected))
    (dom/add-class selected-mode-button :selected))
  (let [inspectors (inspectors-for-keys)]
    (doseq [[k inspector] inspectors]
      (if (= k (:mode @state))
        (dom/remove-class inspector :invisible)
        (dom/add-class inspector :invisible)))))

(object/object* ::cyclop.panel
                :tags [:cyclop.panel]
                :name "Cyclop"
                :init (fn [this]
                        (full-panel this)))

(behavior ::on-close-destroy
          :triggers #{:close}
          :reaction (fn [this]
                      (when-let [ts (:lt.objs.tabs/tabset @this)]
                        (when (= (count (:objs @ts)) 1)
                          (tabs/rem-tabset ts)))
                      (object/raise this :destroy)))

(behavior ::select-mode
          :triggers #{:select-mode}
          :reaction (fn [this new-mode]
                      (swap! state assoc-in [:mode] new-mode)
                      (refresh-ui this)
                      ))

(def cyclop (object/create ::cyclop.panel))
(refresh-ui cyclop)

(cmd/command {:command ::start
              :desc "Cyclop: Start"
              :exec (fn []
                      (tabs/add-or-focus! cyclop)
                      (refresh-ui cyclop))})

state

cyclop
