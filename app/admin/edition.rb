ActiveAdmin.register Edition do
  permit_params :name, :description, :avatar

  index do
    column "ID", :id
    column "Название", :name
    column "Описание", :description
    column "Аватар", :avatar_file_name
    column "Создан", :created_at
    column "Обновлён", :updated_at
    actions
  end

  show do
    attributes_table do
      row :id
      row :name
      row :description
      row :avatar_file_name
      row :articles_count do |res|
        res.articles.count
      end
      row :subscribers_count do |res|
        res.users.count
      end
    end
  end

  form do |f|
    f.inputs do
      f.input :avatar, as: :file
      f.input :name
      f.input :description
    end
    f.actions
  end

end
