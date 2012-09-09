module ApplicationHelper

  def description_to_html ref
    out = I18n.translate ref
    if out.kind_of? Array
      out.map! do |item|
        item.kind_of?(Array) ? item.join('<br/>') : item
      end
      return '<p>' + out.join('</p><p>') + '</p>'
    end
    return out
  end

  def markdown_to_html string
  end

end
