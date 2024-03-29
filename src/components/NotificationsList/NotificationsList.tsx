import { FC, useContext } from "react"

import { NotificationsContext } from "../../context/NotificationsContext"
import { markAllRead } from "../../reducers/notifications"
import Notification from "../Notification/Notification"
import styles from "./NotificationsList.module.scss"

type NotificationType = {
  author: string
  type:
    | "reacted to your recent post"
    | "has joined your group"
    | "left the group"
    | "sent you a private message"
    | "commented on your picture"
    | "followed you"
  createdAt: string
  content?: string
  isRead: boolean
}

const NotificationsList: FC<{ notifications: NotificationType[] }> = ({
  notifications,
}) => {
  const newNotifications = notifications.reduce(
    (featuredCount, notification) => featuredCount + +!notification.isRead,
    0
  )

  const { dispatchNotifications } = useContext(NotificationsContext)

  return (
    <section className={styles["notifications-section"]}>
      <header className={styles["heading"]}>
        <h1 className={styles["header"]}>Notifications</h1>
        {newNotifications > 0 && (
          <div className={styles["featured-count"]}>{newNotifications}</div>
        )}

        <button
          className={styles["mark-all-btn"]}
          onClick={() => {
            dispatchNotifications(markAllRead())
          }}>
          Mark all as read
        </button>
      </header>
      <ul className={styles["notifications-list"]}>
        {notifications.map((notification) => (
          <li>
            <Notification {...notification} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default NotificationsList
export type { NotificationType }
