import { routes } from "@/constants";
import { Icon } from "@iconify/react";
import Link from "next/link";

function Header() {
  return (
    <div className="bg-surface px-6 py-6 rounded-md flex items-center">
      <div className="flex items-center gap-4">
        <Link href={routes.Home}>
          <Icon icon="lets-icons:arrow-left" className="size-5 " color="var(--content)" />
        </Link>

        <Link href={routes.Home}>
          <div className="flex items-center gap-2 rounded-full px-3 py-2 hover:bg-neutralHovered text-content">
            <Icon icon="arcticons:verizon-messages" className="size-5 " color="var(--content)" />
            <span>Posts</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
