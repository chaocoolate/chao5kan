module ApplicationHelper

  def t ref
    return I18n.translate ref
  end
  def description_to_html ref
    out = I18n.translate ref
    if out.kind_of? Array
      out.map! do |item|
        item.kind_of?(Array) ? item.join("  \n") : item
      end
      return markdown_to_html out.join "\n\n"
    end
    return markdown_to_html out
  end
  def markdown_to_html string
    return BlueCloth::new(string).to_html
  end

end
