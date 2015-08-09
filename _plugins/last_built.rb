module Jekyll
  class LastBuilt < Liquid::Tag

    def initialize(tag_name, text, tokens)
      super
      @text = text
    end

    def render(context)
      "#{@text} #{Time.now.strftime("%A %-d, %B %Y %H:%M:%S - %Z")}"
    end
  end
end

Liquid::Template.register_tag('last_built', Jekyll::LastBuilt)
