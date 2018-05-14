ActiveAdmin.register Article do
  permit_params :name, :access_level, :annotation, :description, :content,
                :avatar, :document, :edition_id, author_ids: []

  index do
    column "ID", :id
    column "Выпуск", :edition
    column "Название", :name
    column "Описание", :description
    column "Аннотация", :annotation
    column "Содержание", :content
    column "Авторы", :authors do |res|
      res.authors.map(&:full_name).join(', ')
    end
    column "Доступ", :access_level
    column "Аватар", :avatar_file_name
    column "Документ", :document_file_name
    actions
  end

  show do
    attributes_table do
      row :id
      row :edition
      row :name
      row :description
      row :annotation
      row :content
      row :authors do |res|
        res.authors.map(&:full_name).join(', ')
      end
      row :access_level
      row :avatar_file_name
      row :document_file_name
    end
  end

  form do |f|
    f.inputs do
      f.input :edition_id, as: :select, collection: Edition.all, prompt: "Выберите выпуск"
      f.input :authors, as: :select2_multiple, collection: User.all, input_html: { class: 'select2able' }
      f.input :access_level
      f.input :avatar, as: :file
      f.input :name
      f.input :description
      f.input :annotation
      f.input :content, as: :ckeditor, input_html: { ckeditor: { toolbar: 'Full' } }
      f.input :document, as: :file
    end
    f.actions
  end

end
