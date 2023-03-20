import { useReducer } from "react"

import styles from "./App.module.scss"
import NotificationsList, {
  NotificationType,
} from "./components/NotificationsList/NotificationsList"
import { NotificationsContext } from "./context/NotificationsContext"
import initialNotifications from "./data/notifications.json"
import { notificationsReducer } from "./reducers/notifications"

function App() {
  const [notifications, dispatchNotifications] = useReducer(
    notificationsReducer,
    initialNotifications as NotificationType[]
  )

  return (
    <NotificationsContext.Provider
      value={{ notifications, dispatchNotifications }}>
      <main className={styles["main"]}>
        <NotificationsList notifications={notifications} />
      </main>
    </NotificationsContext.Provider>
  )
}

export default App
