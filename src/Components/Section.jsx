import React from 'react'
import { motion} from "framer-motion";


const Section = ({
    h3,
    text,
    hasBtn=true,
    btnTxt,
    imgSrc,
    imgSize = "70%",
    backgroundColor,
    headingColor,
    textColor,
    btnBgcolor,
    btnColor}) => {

    const headingOptions = {
        initial:{
            y:"-100%",
            opacity:0,
        },
        whileInView:{
            y:0,
            opacity:1,
        }
    }

    const textOptions={
        ...headingOptions,
        transition:{
            deplay:0.3,
        }
    }

    const btnOptions={
        initial:{
            y:"100%",
            opacity:0,
        },
        whileInView:{
            y:0,
            opacity:1,
        },

        transition:{
            deplay:0.3,
            ease:"easeIn"
        }
    }

    const imgOptions={
        initial:{
            scale:0.1,
            opacity:0,
        },
        whileInView:{
            scale:1,
            opacity:1,
        },

        transition:{
            deplay:0.3,
      
        }
    }

    return (
    <section className='section' style={{
        backgroundColor: backgroundColor
    }}>
        <div>

            <motion.h3 style={{
                color: headingColor
            }}
            data-cursorpointer={true}
            {...headingOptions}
            >
                {h3}
            </motion.h3>
            <motion.p style={{
                color: textColor
            }}
            data-cursorpointer={true}
            {...textOptions}
            >
                {text}
            </motion.p>
            {
                hasBtn && <motion.button style={{
                    color: btnColor,
                    backgroundColor: btnBgcolor
                    
                }}
                data-cursorpointer={true}
                {...btnOptions}>
                {btnTxt}</motion.button>
            }
            <motion.div {...imgOptions}>
                <img src={imgSrc} alt="Imgsrc" style={{
                    width:imgSize
                }}
                />
            </motion.div>
        </div>
    </section>
  )
}

export default Section