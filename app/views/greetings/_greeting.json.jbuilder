json.extract! greeting, :id, :text, :created_at, :updated_at
json.url greeting_url(greeting, format: :json)
