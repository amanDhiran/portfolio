import Icon from "@/components/Icon";

export function Footer(){
    return (
        <div className="flex mx-auto max-w-3xl justify-between mb-4 mt-9 p-5 text-xs text-white/30 border-t pt-3 border-white/25">
        <p>2024@ Aman Dhiran</p>
        <a
          href="http://github.com/amanDhiran"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-foreground"
        >
          <div className="flex items-center gap-1">
          <Icon name="github" className="size-5" />
          @amanDhiran
          </div>
        </a>
      </div>
    )
}