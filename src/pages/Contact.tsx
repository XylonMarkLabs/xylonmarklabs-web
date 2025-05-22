import { useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../lib/animation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Youtube,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimatedSVG from "../components/ui/animated-svg";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../components/ui/form";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import { useToast } from "../hooks/use-toast";
import { apiRequest } from "../lib/queryClient";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." })
});

type FormValues = z.infer<typeof formSchema>;

const SocialMediaButton = ({ 
  icon, 
  href, 
  label, 
  color = "accent-gradient" 
}: { 
  icon: React.ReactNode; 
  href: string; 
  label: string;
  color?: string;
}) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className={`w-12 h-12 rounded-full ${color} flex items-center justify-center hover:opacity-90 transition-opacity`}
    >
      {icon}
    </motion.a>
  );
};

const ContactDetail = ({ 
  icon, 
  title, 
  detail,
  detail2,
  link = false
}: { 
  icon: React.ReactNode; 
  title: string; 
  detail: string;
  detail2?: string;
  link?: boolean;
}) => {
  return (
    <div className="flex items-start space-x-4">
      <div className="w-12 h-12 rounded-full accent-gradient flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-bold">{title}</h3>
        {link ? (
          <a href={detail} className="text-slate-700 dark:text-gray-300 hover:text-primary">
            {detail}
          </a>
        ) : (
          <>
            <p className="text-slate-700 dark:text-gray-300">{detail}</p>
            {detail2 && <p className="text-slate-700 dark:text-gray-300">{detail2}</p>}
          </>
        )}
      </div>
    </div>
  );
};

const ContactPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      await apiRequest("POST", "/api/contact", data);
      
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
        variant: "default",
      });
      
      setSubmitted(true);
      form.reset();
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "There was a problem sending your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialMediaLinks = [
    { icon: <Facebook size={18} className="text-white" />, href: "https://facebook.com/xylonmarkslabs", label: "Facebook" },
    { icon: <Twitter size={18} className="text-white" />, href: "https://twitter.com/xylonmarkslabs", label: "Twitter" },
    { icon: <Instagram size={18} className="text-white" />, href: "https://instagram.com/xylonmarkslabs", label: "Instagram" },
    { icon: <Linkedin size={18} className="text-white" />, href: "https://linkedin.com/company/xylonmarkslabs", label: "LinkedIn" },
    { icon: <Github size={18} className="text-white" />, href: "https://github.com/xylonmarkslabs", label: "GitHub" },
    { icon: <Youtube size={18} className="text-white" />, href: "https://youtube.com/xylonmarkslabs", label: "YouTube" },
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - XylonMark Labs</title>
        <meta name="description" content="Get in touch with XylonMark Labs. We're here to answer your questions and help with your technology needs. Contact us via phone, email, or our convenient contact form." />
      </Helmet>

      <AnimatedSVG />
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="text-center mb-16"
          >
            <motion.h1
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Get In <span className="accent-text">Touch</span>
            </motion.h1>
            <motion.p
              variants={fadeIn("up", "tween", 0.4, 1)}
              className="text-xl text-slate-700 dark:text-gray-300 max-w-3xl mx-auto"
            >
              We'd love to hear from you. Whether you have a question about our services, pricing, or just want to say hello, we're here to help.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-16 mb-20">
            {/* Contact Information */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="space-y-8"
            >
              <motion.h2
                variants={fadeIn("right", "tween", 0.2, 1)}
                className="text-2xl font-bold mb-8 text-center md:text-left"
              >
                Contact Information
              </motion.h2>

              <motion.div
                variants={fadeIn("right", "tween", 0.3, 1)}
                className="flex justify-center md:justify-normal flex-wrap gap-8"
              >
                {/* <ContactDetail
                  icon={<MapPin size={20} className="text-white" />}
                  title="Our Office"
                  detail="123 Tech Boulevard, Innovation District"
                  detail2="San Francisco, CA 94105, USA"
                /> */}
                
                <ContactDetail
                  icon={<Phone size={20} className="text-white" />}
                  title="Phone"
                  detail="+1 (415) 555-0123"
                />
                
                <ContactDetail
                  icon={<Mail size={20} className="text-white" />}
                  title="Email"
                  detail="contact@xylonmarkslabs.com"
                />
                
                {/* <ContactDetail
                  icon={<Clock size={20} className="text-white" />}
                  title="Business Hours"
                  detail="Monday - Friday: 9:00 AM - 6:00 PM"
                  detail2="Saturday - Sunday: Closed"
                /> */}
              </motion.div>

              <motion.div
                variants={fadeIn("right", "tween", 0.5, 1)}
                className="pt-8"
              >
                <h3 className="text-xl font-bold mb-6 text-center md:text-left">Follow Us</h3>
                <div className="flex flex-wrap gap-4 justify-center md:justify-normal">
                  {socialMediaLinks.map((social, index) => (
                    <SocialMediaButton
                      key={index}
                      icon={social.icon}
                      href={social.href}
                      label={social.label}
                    />
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
            >
              <motion.div
                variants={fadeIn("left", "tween", 0.2, 1)}
                className="glass-card rounded-2xl p-8"
              >
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-10"
                  >
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full accent-gradient flex items-center justify-center">
                      <Send size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Message Sent!</h3>
                    <p className="text-slate-700 dark:text-gray-300 mb-6">
                      Thank you for contacting us. We'll get back to you as soon as possible.
                    </p>
                    <Button 
                      onClick={() => setSubmitted(false)}
                      className="accent-gradient hover:opacity-90 transition-opacity rounded-lg"
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-medium text-slate-700 dark:text-gray-300">Name</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Your name"
                                className="bg-slate-100/50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/50"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-medium text-slate-700 dark:text-gray-300">Email</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Your email"
                                type="email"
                                className="bg-slate-100/50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/50"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-medium text-slate-700 dark:text-gray-300">Subject</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Subject of your message"
                                className="bg-slate-100/50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/50"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-medium text-slate-700 dark:text-gray-300">Message</FormLabel>
                            <FormControl>
                              <Textarea
                                rows={5}
                                placeholder="Your message"
                                className="bg-slate-100/50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/50"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full accent-gradient hover:opacity-90 transition-opacity rounded-lg"
                      >
                        {isSubmitting ? (
                          "Sending..."
                        ) : (
                          <span className="flex items-center">
                            Send Message
                            <Send className="ml-2 h-4 w-4" />
                          </span>
                        )}
                      </Button>
                    </form>
                  </Form>
                )}
              </motion.div>
            </motion.div>
          </div>

          

          {/* FAQ Section */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="glass-card rounded-3xl p-8 md:p-12 text-center"
          >
            <motion.h2
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="text-2xl font-bold mb-8"
            >
              Have Any Questions?
            </motion.h2>
            <motion.p
              variants={fadeIn("up", "tween", 0.4, 1)}
              className="text-lg text-slate-698 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              We're here to help and answer any questions you might have. We look forward to hearing from you!
            </motion.p>
            <motion.div
              variants={fadeIn("up", "tween", 0.6, 1)}
              className="flex flex-wrap justify-center gap-4"
            >
              <a
                href="tel:+14155550123"
                className="inline-flex items-center gap-2 accent-gradient px-16 py-2 rounded-full font-semibold hover:opacity-90 transition-opacity text-slate-50"
              >
                <Phone size={18} className="text-white" />
                Call Us
              </a>
              <a
                href="mailto:contact@xylonmarkslabs.com"
                className="inline-flex items-center gap-2 bg-transparent border border-primary dark:border-white px-16 py-2 rounded-full font-semibold hover:bg-primary/10 transition-colors"
              >
                <Mail size={18} />
                Email Us
              </a>
            </motion.div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default ContactPage;