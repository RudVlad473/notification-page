import { NotificationType } from "../components/NotificationsList/NotificationsList"

type NotificationsTypes = "MARK_ALL_READ"

interface NotificationsAction {
  type: NotificationsTypes
  payload: undefined
}

type Notifications = NotificationType[]

function notificationsReducer(
  notifications: Notifications,
  { type, payload }: NotificationsAction
): Notifications {
  switch (type) {
    case "MARK_ALL_READ": {
      return notifications.map((notification) => ({
        ...notification,
        isRead: true,
      }))
    }
    default: {
      throw new Error("Such notification type is not implemented")
    }
  }
}

export const markAllRead = (): NotificationsAction => ({
  type: "MARK_ALL_READ",
  payload: undefined,
})

export { notificationsReducer }
export type { Notifications, NotificationsAction }
