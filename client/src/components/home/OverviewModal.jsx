import { Icon } from "@iconify/react";
import { Button, Image } from "@nextui-org/react";
import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import arrow from '../../assets/arrow.png'


export default function OverviewModal({ modalRef, handleOverview, open }) {
    const data = [
        {
            content:'',
            image:''
        },
        {
            content:'',
            image:''
        },
        {
            content:'',
            image:''
        },
        {
            content:'',
            image:''
        },
        {
            content:'',
            image:''
        },
        {
            content:'',
            image:''
        },
        {
            content:'',
            image:''
        },
    ]
    const arrowRef = useRef(null)
    const [index, setIndex] = useState(0)
    const handleLeft=()=>{
        const w = modalRef.current.getBoundingClientRect().width
        const h = modalRef.current.getBoundingClientRect().height
        if(index===0){
            arrowRef.current.style.transition = 'translate 1ms ease'
            arrowRef.current.style.translate = `${w*0.9}px ${h*0.99}px`
            arrowRef.current.style.rotate = '180deg'
            setIndex(6)
            return
        }
        else if(index===6){
            arrowRef.current.style.transition = 'translate 1ms ease'
            arrowRef.current.style.translate = `0 17rem`
            arrowRef.current.style.rotate = '0deg'
            setIndex(5)
            return
        }
        arrowRef.current.style.transition = 'translate 1ms ease'
        arrowRef.current.style.translate = `0 ${3.5*(index-1)}rem`
        setIndex((index-1))
    }
    const handleRight=()=>{
        const w = modalRef.current.getBoundingClientRect().width
        const h = modalRef.current.getBoundingClientRect().height
        if(index===5){
            arrowRef.current.style.transition = 'translate 1ms ease'
            arrowRef.current.style.translate = `${w*0.9}px ${h*0.99}px`
            arrowRef.current.style.rotate = '180deg'
            setIndex(6)
            return
        }else if(index===6){
            arrowRef.current.style.transition = 'translate 1ms ease'
            arrowRef.current.style.translate = `0 0rem`
            arrowRef.current.style.rotate = '0deg'
            setIndex(0)
            return
        }
        arrowRef.current.style.transition = 'translate 1ms ease'
        arrowRef.current.style.translate = `0 ${3.5*(index+1)}rem`
        setIndex(index+1)
    }
    return (
        <>
        <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{
            opacity: open ? 1 : 0,
            scaleY: open ? 1 : 0,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-full z-50 sticky  bottom-0 h-screen transition-all bg-slate-800 hidden flex-col"
        >
            <div className="w-full flex p-6 ">
            <Button isIconOnly color="danger" onPress={handleOverview}>
                <Icon icon='mdi:close'  />
            </Button>
            </div>
            <div className="h-full w-full flex overflow-scroll ">
                <div onClick={handleLeft} className="h-full flex justify-center items-center w-[5%] text-white ">{`<`}</div>
                <div className="w-[90%]">

                </div>
                <button onClick={handleRight} className="h-full flex justify-center items-center w-[5%] text-white">{`>`}</button>
            </div>
            <Image
                ref={arrowRef}
                src={arrow} 
                className={`w-12 h-12 fixed top-0 translate-y-[5.5rem]`}
            />
            {/* //5.5 9  */}
        </motion.div>
        </>
    );
}