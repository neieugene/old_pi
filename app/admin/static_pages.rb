ActiveAdmin.register StaticPage do
  permit_params :body, :slug

  index do
    column "ID", :id
    column "Slug", :slug
    column "Body", :body
    actions
  end

  show do
    attributes_table do
      row :id
      row :slug
      row :body
    end
  end

  form do |f|
    f.inputs do
      f.input :slug
      f.input :body, as: :ckeditor, input_html: { ckeditor: { toolbar: 'Full' } }
    end
    f.actions
  end


end
