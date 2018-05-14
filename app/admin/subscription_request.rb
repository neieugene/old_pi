ActiveAdmin.register SubscriptionRequest do
  permit_params :status, :phone, :email, :user_id, :edition_id, :name

  controller do
    def scoped_collection
      super.includes(:edition, user: [:profile]) # prevents N+1 queries 
    end
  end

  member_action :approve, method: :post do
    response = resource.approve
    if response
      flash[:notice] = "Подписка подтверждена"
    else
      flash[:error] = "Подписка не подтверждена"
    end
    redirect_to [:admin, :subscription_requests]
  end

  index do
    column "ID", :id
    column "Пользователь", sortable: 'profiles.first_name' do |res|
      res.name
    end
    column "Выпуск", sortable: 'editions.name' do |res|
      res.edition
    end
    column :email
    column "Телефон", :phone
    column "Статус", :status
    actions do |res|
      link_to "Подтвердить", approve_admin_subscription_request_path(res), method: :post unless res.approved?
    end
  end

  show title: "Запрос на подписку" do
    attributes_table do
      row :id
      row "Пользователь" do |res|
        res.name
      end
      row "Издание" do |res|
        res.edition
      end
      row "Телефон" do |res|
        res.phone
      end
      row "Статус" do |res|
        res.status
      end
    end
  end
end