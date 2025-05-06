import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Phone number must be at least 10 digits." }),
  projectType: z.string({ required_error: "Please select a project type." }),
  message: z.string(),
});

type FormValues = z.infer<typeof formSchema>;

// Insert EmailJS script
const loadEmailJSScript = () => {
  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
  script.async = true;
  document.body.appendChild(script);
  
  return script;
};

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Initialize EmailJS
  useEffect(() => {
    const script = loadEmailJSScript();
    
    script.onload = () => {
      // Initialize EmailJS with your user ID
      // Replace "user_yourUserID" with your actual EmailJS user ID
      window.emailjs.init("syb5oUAaBhVW0vsFg");
    };
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Initialize form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      projectType: "",
      message: "",
    },
  });

  // Handle form submission
  const onSubmit = (values: FormValues) => {
    setIsSubmitting(true);

    // Create template parameters object for EmailJS
    const templateParams = {
      from_name: values.name,
      from_email: values.email,
      phone_number: values.phone,
      project_type: values.projectType,
      message: values.message,
      to_email: "jasmineconstructions@gmail.com" // Your receiving email
    };

    // Send email using EmailJS
    // Replace "template_ID" and "service_ID" with your actual EmailJS template ID and service ID
    window.emailjs.send("service_ubk5i5i", "template_dkfr4gs", templateParams)
      .then((response) => {
        console.log("Email sent successfully:", response);
        toast({
          title: "Message Sent",
          description: "Thank you for contacting us. We'll get back to you shortly.",
        });
        form.reset();
      })
      .catch((error) => {
        console.error("Email error:", error);
        toast({
          title: "Error",
          description: "There was a problem sending your message. Please try again later.",
          variant: "destructive",
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Page Banner */}
      <div className="pt-24 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-8 py-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4">Contact Us</h1>
          <p className="text-lg text-white/90 max-w-3xl">
            Get in touch with our team for inquiries, quotes, or to discuss your construction project needs.
          </p>
        </div>
      </div>

      <main className="flex-grow bg-light">
        <div className="container mx-auto px-4 md:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold font-heading mb-6">Send Us a Message</h2>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
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
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="email@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input type="tel" placeholder="(555) 123-4567" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="projectType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Project Type</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a project type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="residential">Residential Construction</SelectItem>
                              <SelectItem value="commercial">Commercial Building</SelectItem>
                              <SelectItem value="renovation">Renovation & Remodeling</SelectItem>
                              <SelectItem value="maintenance">Maintenance & Repairs</SelectItem>
                              <SelectItem value="consultation">Consultation & Design</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your project needs..."
                            className="min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold font-heading mb-6">Contact Information</h2>

              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <ul className="space-y-6">
                  <li className="flex">
                    <Phone className="w-5 h-5 mr-3 text-secondary mt-1" />
                    <div>
                      <p className="font-semibold text-gray-800">Phone</p>
                      <p className="text-gray-600">(071) 5 694 904</p>
                    </div>
                  </li>
                  <li className="flex">
                    <Mail className="w-5 h-5 mr-3 text-secondary mt-1" />
                    <div>
                      <p className="font-semibold text-gray-800">Email</p>
                      <p className="text-gray-600">jasmineconstructions@gmail.com</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h3 className="font-semibold mb-3">Business Hours</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="text-gray-800">8:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="text-gray-800">9:00 AM - 2:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="text-gray-800">Closed</span>
                  </li>
                </ul>
              </div>

              {/* Google Maps Embed placeholder */}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

// Add TypeScript declaration for EmailJS
declare global {
  interface Window {
    emailjs: {
      init: (userId: string) => void;
      send: (serviceId: string, templateId: string, templateParams: any) => Promise<any>;
    }
  }
}

export default Contact;