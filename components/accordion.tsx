'use client'

//imports
import { PiCaretUpBold } from 'react-icons/pi'
import {
    card,
    cardHeader,
    cardcontent,
    cardTitle,
    cardDescription,
} from '@/components/ui/card'
import { useState } from 'react'
import { FcIdea } from 'react-icons/fc'
import lottie from 'lottie-react'
import { motion } from 'framer-motion'
import button from '@/components/ui/button'

export default function Accordion(
    {
        children, description, title, annimation,
    }: {
        children: React.ReactNode
        description: string
        title: string
        annimation: any
    }
) {
    const[is_collapsed, setCollapsed] = useState<boolean>(false)
    return (
        <Card className={`bg-white shadow-2xl backdrop-blur-lg px-8 h-full ${is_collapsed ? 'py-0 bg-opacity-90' : 'py-5 bg-opacity-100'} transition-all`}>
          <div className="flex items-center justify-between">
            <CardHeader>
              <CardTitle>
                <div className={`flex items-end gap-3 ${is_collapsed ? 'text-2xl' : 'text-4xl'} font-bold h-full transition-all`}>
                  <span>{title}</span>
                  <Lottie className={is_collapsed ? 'w-8' : 'w-12'} animationData={animation} loop />
                </div>
              </CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
            <Button
              className="cursor-pointer text-2xl font-extrabold h-10 w-10 rounded-full"
              onClick={() => setIsCollapsed(!is_collapsed)}
              size="icon"
              variant="ghost"
            >
              <span className={is_collapsed ? 'rotate-180' : 'rotate-0'}><PiCaretUpBold /></span>
            </Button>
          </div>
    
          {!is_collapsed && <CardContent className="flex flex-col gap-12 text-lg">{children}</CardContent>}
        </Card>
      )
    }