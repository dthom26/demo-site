import PageMeta from '@/seo/PageMeta';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { faqs } from '@/data/faq';

export default function FAQ() {
  return (
    <>
      <PageMeta
        title="FAQ"
        path="/faq"
        description="Frequently asked questions about the WeUpLiftU Foundation — our mission, programs, funding allocation, and how to get involved."
      />

      <section className="bg-uplift-navy py-20">
        <div className="container-pad text-center">
          <Badge variant="gold" className="mb-4">Got Questions?</Badge>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Everything you need to know about WeUpLiftU Foundation and how we serve our community.
          </p>
        </div>
      </section>

      <section className="bg-uplift-light section-pad" aria-label="FAQ accordion">
        <div className="container-pad max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="bg-white rounded-xl border border-gray-200 px-6 divide-y divide-gray-200">
            {faqs.map(({ question, answer }) => (
              <AccordionItem key={question} value={question} className="border-none">
                <AccordionTrigger>{question}</AccordionTrigger>
                <AccordionContent>{answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-12">
            <p className="text-uplift-gray mb-4">Still have questions?</p>
            <Button asChild variant="default">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
