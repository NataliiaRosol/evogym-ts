import { motion } from "framer-motion";
import { SelectedPage } from "../../shared/types"
import { useForm } from "react-hook-form";
import ContactUsPageGraphic from "./../../assets/ContactUsPageGraphic.png";
import HText from "../../shared/HText";
import { kMaxLength } from "buffer";


type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const ContactUs = ({setSelectedPage}: Props) => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
      <motion.div onViewportEnter={()=> setSelectedPage(SelectedPage.ContactUs)}>
        {/* Header */}
        <motion.div
          className="md:w-3/5"
          initial='hidden'
          whileInView='visible'
          viewport={{once: true, amount: 0.5}}
          transition={{duration: 0.5}}
          variants={{
            hidden: {opacity: 0, x: -50},
            visible: {opacity: 1, x: 0}
          }}
        >
          <HText>
            <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
          </HText>
          <p className="my-5">
            Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl
            sapien vel rhoncus. Placerat at in enim pellentesque. Nulla
            adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.
          </p>
        </motion.div>

        {/* Form and Image */}
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div className="mt-10 basis-3/5 md:mt-0"
            initial='hidden'
            whileInView='visible'
            viewport={{once: true, amount: 0.5}}
            transition={{duration: 0.5}}
            variants={{
              hidden: {opacity: 0, y: 50},
              visible: {opacity: 1, y: 0}
            }}
          >
            <form
              target="_blank"
              onSubmit={onSubmit}
              action="https://formsubmit.co/a679b2955caf3266c1fb1fc22e46610f"
              method='POST'
            >
              <input type="text" placeholder="Name" 
                className="mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white focus:outline-none"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
                {errors.name && (
                  <p className="mt-1 text-primary-500">
                    {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" &&
                    "Max length is 100 char."}
                  </p>
                )}
              

              <input type="email" placeholder="Email" 
                className="mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white focus:outline-none"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
                {errors.email && (
                <p className="mt-1 text-primary-500">
                  {errors.email.type === "required" &&
                    "This field is required."}
                  {errors.email.type === "pattern" && "Invalid email address."}
                </p>
              )}
              

              <textarea placeholder="Message" 
                className="mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white focus:outline-none"
                rows={4}
                cols={50}
                {...register('message', {
                  required: true,
                  maxLength: 2000,
                })}
              />
                {errors.message && (
                  <p className="mt-1 text-primary-500">
                    { errors.message.type === 'required' && 'This field is required.' }
                    { errors.message.type === 'maxLength' && 'Max length is 2000 char.' }
                  </p>
                )}
              

              <button type="submit" 
                className="mb-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white uppercase"
              >
                Submit
              </button>
            </form>
          </motion.div>

          <motion.div 
            className="relative mt-16 basis-2/6 md:mt-0"
            initial='hidden'
            whileInView='visible'
            viewport={{once: true, amount: 0.5}}
            transition={{delay:0.2, duration: 0.5}}
            variants={{
              hidden: {opacity: 0, y: 50},
              visible: {opacity: 1, y: 0}
            }}
          >
            <div className="md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]">
              <img src={ContactUsPageGraphic} alt="contact up page graphic" 
                className="w-full"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default ContactUs