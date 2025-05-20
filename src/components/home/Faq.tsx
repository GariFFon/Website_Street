import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../Button';

const Faq: React.FC = () => {
  const faqData = [
    {
      question: "How do I know if my sneakers are authentic?",
      answer: "All sneakers on ModKicks are guaranteed authentic. We work directly with authorized retailers and have a rigorous authentication process. Each pair comes with our authenticity certificate and verification seal."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for unworn shoes in their original packaging. For hygiene reasons, worn shoes cannot be returned unless they're defective. Shipping costs for returns are covered by ModKicks."
    },
    {
      question: "How long does shipping take?",
      answer: "Domestic orders typically arrive within 3-5 business days. International shipping takes 7-14 business days. Express shipping options are available at checkout. All orders include tracking information."
    },
    {
      question: "Do you offer size exchanges?",
      answer: "Yes, we offer free size exchanges within 14 days of delivery. Simply initiate an exchange through your account, and we'll send you a return label. New size availability is subject to stock."
    },
    {
      question: "How do I track my order?",
      answer: "Once your order ships, you'll receive a tracking number via email. You can also track your order in real-time by logging into your ModKicks account and visiting the 'Order History' section."
    }
  ];
  const containerVariants = {
    hidden: { y: 20 },
    visible: {
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        type: "spring",
        damping: 15,
        stiffness: 100,
        duration: 0.5 
      }
    }
  };

  const contactVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        delay: 0.2
      }
    }
  };

  return (    <motion.section 
      className="py-16 bg-black/95 text-white" 
      id="faqs"
    >
      <div className="container mx-auto px-4">
       
        <motion.h2 
          className="text-white text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.p 
          className="mb-2 text-gray-400 max-w-3xl"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Get answers to common questions about shopping with ModKicks, including authenticity, shipping, returns, and more.
        </motion.p>
        
        <div className="mx-auto">
          <motion.div
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <Accordion type="single" collapsible className="w-full">
              {faqData.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                >
                  <AccordionItem value={`item-${index}`} className="border-b border-gray-800">
                    <AccordionTrigger className="text-left font-semibold py-4 hover:text-white">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="py-4 text-gray-400">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
          
          <motion.div 
            className="mt-10 text-center"
            variants={contactVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="max-w-2xl mx-auto px-4">
              <h3 className="text-xl font-semibold mb-4 text-white">Need more help?</h3>
              <p className="mb-10 text-gray-400">
                Our customer support team is available 24/7 to assist you with any questions.
              </p>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Link to="/contact">
                <Button variant='black' size='lg'>Contact Support</Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Faq;