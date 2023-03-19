import styles from "./App.module.scss"
import NotificationsList, {
  NotificationType,
} from "./components/NotificationsList/NotificationsList"
import notifications from "./data/notifications.json"

function App() {
  return (
    <main className={styles["main"]}>
      <NotificationsList notifications={notifications as NotificationType[]} />
    </main>
  )
}

export default App
