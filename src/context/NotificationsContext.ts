import { createContext } from "react"

import { Notifications, NotificationsAction } from "../reducers/notifications"

const NotificationsContext = createContext<{
  notifications: Notifications
  dispatchNotifications: React.Dispatch<NotificationsAction>
}>({
  notifications: [],
  dispatchNotifications: () => {},
})

export { NotificationsContext }
