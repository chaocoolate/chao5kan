module ApplicationHelper

  def description_to_html ref
    out = I18n.translate ref
    if out.kind_of? Array
      out.map! do |item|
        markdown_to_html(item.kind_of?(Array) ? item.join('\n') : item)
      end
      return "<p>" + out.join('</p><p>') + '</p>'
    end
    return markdown_to_html out
  end

  def markdown_to_html string
    return BlueCloth::new(string).to_html
  end

end
