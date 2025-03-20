import { Loader, ShoppingCartIcon, UserIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/constants";
import ModeToggle from "./mode-toggle";
import Menu from "./menu";

const Header = () => {
    return (
        <header className="w-full border-b">
          <div className="wrapper flex-between">
            <div className="flex-start">
                <Link href='/'>
                  <Image src='/images/logo.svg' alt={`${APP_NAME} logo`} width={48} height={48} className="cursor-pointer" priority={true}/>
                </Link>
                <span className="hidden lg:block font-bold text-2xl ml-2">{APP_NAME}</span>
            </div>
            <div className="space-x-12">
                <Button asChild variant='ghost' size='icon'>
                  <Link href='/cart'>
                    <ShoppingCartIcon />Корзина
                  </Link>        
                </Button>
                <Button asChild variant='ghost' size='icon'>
                  <Link href='/signin'>
                    <UserIcon />Войти
                  </Link>        
                
                </Button>
                
            </div>
          </div>
        </header>
    )
  }
  
  export default Header
  
  