ActiveAdmin.register Subscription do
  index do
    column "ID", :id
    column "Пользователь", :user
    column "Выпуск", :edition
    column "Создан", :created_at
    column "Обновлён", :updated_at
    actions defaults: false do |res|
      item "Удалить", admin_subscription_path(res), method: :delete
    end
  end
end