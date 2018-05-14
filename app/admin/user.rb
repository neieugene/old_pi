ActiveAdmin.register User do
  permit_params :email, :password, :password_confirmation,
    profile_attributes: [:first_name, :last_name, :age, :phone, :avatar, :description]

  controller do
    def update
      model = :user
      if params[model][:password].blank?
        %w(password password_confirmation).each { |p| params[model].delete(p) }
      end

      super
    end
  end

  index do
    column "ID", :id
    column "Имя" do |res|
      res.full_name
    end
    column :email
    column "Возраст" do |res|
      res.profile.age
    end
    column "Телефон" do |res|
      res.profile.phone
    end
    column "Описание" do |res|
      res.profile.description
    end
    column "Автор" do |res|
      res.is_author?
    end
    column "Аватар" do |res|
      res.profile.avatar_file_name
    end
    column "Создан", :created_at
    actions
  end

  show do
    attributes_table do
      row :id
      row :email
      row :first_name do |res|
        res.profile.first_name
      end
      row :last_name do |res|
        res.profile.last_name
      end
      row :phone do |res|
        res.profile.phone
      end
      row :age do |res|
        res.profile.age
      end
      row :description do |res|
        res.profile.description
      end
      row :avatar do |res|
        res.profile.avatar_file_name
      end
      row :is_author do |res|
        res.is_author?
      end
      row :created_at
    end
  end

  form do |f|
    f.inputs do
      f.input :email
      f.input :password
      f.input :password_confirmation

      f.inputs "Профиль", for: [:profile, f.object.profile || Profile.new] do |ff|
        ff.input :first_name
        ff.input :last_name
        ff.input :age
        ff.input :phone
        ff.input :avatar, as: :file
        ff.input :description
      end
    end
    f.actions
  end
end
