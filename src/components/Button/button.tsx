import { ComponentProps, ReactNode } from "react";
import {tv, VariantProps} from "tailwind-variants";

const buttonVariants = tv({
    base: "rounded-lg px-5  font-medium flex items-center justify-center gap-2",

    variants:{
        btn_color_variant:{
            btn_primary:"bg-blue-400  text-blue-950  hover:bg-blue-300",
            btn_secondary: "bg-zinc-800  text-zinc-200 hover:bg-zinc-700"
        },

        btn_size:{
            default: "py-2",
            full: "w-full h-11"
        }

    },

    /**caso a cor nao seja dita, entao ele vai colocar por padrao a cor do  defaultVariants*/
    defaultVariants:{
        btn_color_variant:  "btn_primary",
        btn_size: "default"
    }
});


interface ButtonProps extends ComponentProps<"button">, VariantProps<typeof buttonVariants>{
    children: ReactNode
 
}

function Button({children, btn_color_variant, btn_size, ...props}: ButtonProps){
    return (
        <button {...props} className={buttonVariants({ btn_color_variant, btn_size})}>
            {children}
        </button>
    )
}

export default Button;

