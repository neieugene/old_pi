ActiveAdmin.register AdminUser do
  permit_params :email, :password, :password_confirmation, role_ids: []

  controller do
    def update
      model = :admin_user
      if params[model][:password].blank?
        %w(password password_confirmation).each { |p| params[model].delete(p) }
      end

      super
    end
  end

  index do
    selectable_column
    id_column
    column :email
    column :role do |res|
      res.has_role?(:admin) ? "admin" : "redactor"
    end
    column :current_sign_in_at
    column :sign_in_count
    column :created_at
    actions
  end

  filter :email
  filter :role
  filter :current_sign_in_at
  filter :sign_in_count
  filter :created_at

  show do
    attributes_table do
      row :id
      row :email
      row :roles do |res|
        res.has_role?(:admin) ? "admin" : "redactor"
      end
      row :created_at
    end
  end

  form do |f|
    f.inputs do
      f.input :email
      f.input :roles, as: :select2_multiple, collection: Role.all, input_html: { class: 'select2able' }
      f.input :password
      f.input :password_confirmation
    end
    f.actions
  end

end
