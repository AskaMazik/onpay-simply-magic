import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, CreditCard, Smartphone, Shield, BarChart3 } from "lucide-react";

const OnPayLanding = () => {
  const benefits = [
    {
      icon: <CreditCard className="h-8 w-8 text-primary" />,
      title: "Essential payment methods",
      description: "Cards, Apple Pay, Google Pay, Klarna"
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Zero gateway fees",
      description: "Pay only your card processing rate - no OnPay fees ever"
    },
    {
      icon: <Smartphone className="h-8 w-8 text-primary" />,
      title: "Fast setup",
      description: "Configure in minutes, start accepting payments today"
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      title: "Your own dashboard",
      description: "Full visibility and control over all transactions"
    }
  ];

  const workflowSteps = [
    "Activate",
    "Set up payment processing", 
    "Connect your store",
    "Start earning"
  ];

  const packageFeatures = [
    "Accept payment cards",
    "Apple Pay® & Google Pay™",
    "Buy now, pay later (Klarna)",
    "3D Secure",
    "Real-time transaction dashboard",
    "WooCommerce integration",
    "Zero monthly fees",
    "Zero setup fees"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-simply-gray">
      {/* Header Section */}
      <div className="border-b border-feature-border bg-background">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Payment gateway <span className="text-muted-foreground">cheerfulbambino.dk</span>
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 space-y-16">
        {/* OnPay Branding Section */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-bold text-2xl">
              OnPay
            </div>
            <div className="text-xl text-muted-foreground">Accept Payments Online</div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-6 leading-tight">
              Ready to turn your website visitors into paying customers?
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Save hundreds per month on payment fees - no gateway fees, no setup costs, no OnPay monthly charges.
            </p>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-feature-border bg-feature-bg hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center space-y-4">
                <div className="flex justify-center">{benefit.icon}</div>
                <h3 className="font-semibold text-lg text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Workflow Section */}
        <div className="text-center space-y-8">
          <h2 className="text-3xl font-bold text-foreground">Here's how it works:</h2>
          
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {workflowSteps.map((step, index) => (
              <div key={index} className="space-y-4">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mx-auto">
                  {index + 1}
                </div>
                <h3 className="font-semibold text-foreground">{step}</h3>
              </div>
            ))}
          </div>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Most merchants are processing payments within hours of starting setup.
          </p>
        </div>

        {/* Package Overview */}
        <div className="text-center space-y-8">
          <h2 className="text-3xl font-bold text-foreground">OnPay package</h2>
          
          <div className="max-w-lg mx-auto">
            <Card className="border-2 border-primary bg-feature-bg shadow-xl">
              <CardContent className="p-8 space-y-6">
                <div className="space-y-2">
                  <Badge variant="secondary" className="bg-primary text-primary-foreground">
                    Professional
                  </Badge>
                  <div className="space-y-1">
                    <div className="text-4xl font-bold text-foreground">0 DKK/mo</div>
                    <p className="text-muted-foreground">Pay only your card processing rate</p>
                  </div>
                </div>
                
                <div className="space-y-3 text-left">
                  {packageFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div className="text-center space-y-6 bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-foreground">Ready to start earning?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Activation is instant, then you'll get step-by-step setup instructions.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold">
            Activate OnPay
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OnPayLanding;