import React from "react";
import { 
  CreditCard, 
  Shield, 
  Zap, 
  FileText, 
  CheckCircle, 
  DollarSign, 
  Receipt, 
  Clock,
  Smartphone,
  Eye,
  Lock
} from "lucide-react";

const BillingPage = () => {
  const features = [
    {
      icon: <CreditCard className="w-6 h-6 text-green-600" />,
      title: "Multiple Payment Options",
      description: "Pay securely via credit card, bank transfer, insurance claims, or mobile wallets.",
      points: ["Visa/Mastercard", "Apple Pay/Google Pay", "Insurance integration", "Bank transfers"]
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-600" />,
      title: "Secure Transactions",
      description: "Bank-level security with end-to-end encryption for all your payments.",
      points: ["HIPAA compliant", "SSL encryption", "Fraud protection", "Secure data storage"]
    },
    {
      icon: <Zap className="w-6 h-6 text-amber-600" />,
      title: "Instant Processing",
      description: "Real-time payment processing with immediate confirmation and receipts.",
      points: ["Instant verification", "Auto-generated receipts", "Email/SMS notifications", "No waiting"]
    },
    {
      icon: <FileText className="w-6 h-6 text-purple-600" />,
      title: "Digital Invoices",
      description: "Clear, itemized invoices accessible anytime through your patient portal.",
      points: ["Itemized billing", "Digital receipts", "Tax documentation", "History archive"]
    },
    {
      icon: <Clock className="w-6 h-6 text-indigo-600" />,
      title: "Payment Plans",
      description: "Flexible payment options and installment plans for your convenience.",
      points: ["Custom payment plans", "No hidden fees", "Auto-debit options", "Grace periods"]
    },
    {
      icon: <Eye className="w-6 h-6 text-red-600" />,
      title: "Transparent Pricing",
      description: "Clear, upfront pricing with no surprise charges or hidden fees.",
      points: ["Upfront estimates", "Cost breakdown", "Insurance coverage", "Discount information"]
    },
  ];

  const processSteps = [
    {
      step: "1",
      title: "Service Provided",
      description: "Receive medical treatment or consultation",
      icon: <CheckCircle className="w-5 h-5" />
    },
    {
      step: "2",
      title: "Digital Invoice",
      description: "Itemized bill sent to your patient portal",
      icon: <Receipt className="w-5 h-5" />
    },
    {
      step: "3",
      title: "Review & Verify",
      description: "Check details and insurance coverage",
      icon: <Eye className="w-5 h-5" />
    },
    {
      step: "4",
      title: "Secure Payment",
      description: "Pay through your preferred method",
      icon: <Lock className="w-5 h-5" />
    },
    {
      step: "5",
      title: "Instant Confirmation",
      description: "Receive payment confirmation and receipt",
      icon: <CheckCircle className="w-5 h-5" />
    },
  ];

  const paymentMethods = [
    { name: "Credit/Debit Cards", icon: "💳", color: "bg-blue-50 text-blue-600" },
    { name: "Mobile Wallets", icon: "📱", color: "bg-green-50 text-green-600" },
    { name: "Bank Transfer", icon: "🏦", color: "bg-purple-50 text-purple-600" },
    { name: "Insurance", icon: "🏥", color: "bg-amber-50 text-amber-600" },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center px-3 py-1.5 bg-white/20 rounded-full text-xs mb-4">
              <DollarSign className="w-3 h-3 mr-1.5" />
              Simple & Secure Billing
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">Transparent Medical Billing</h1>
            <p className="text-base sm:text-lg opacity-90">
              Experience hassle-free billing with clear pricing, multiple payment options, and secure transactions designed for your convenience.
            </p>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Payment Process */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">How Our Billing Works</h2>
            <p className="text-sm text-gray-600 max-w-2xl mx-auto">
              A simple, transparent process from consultation to payment confirmation
            </p>
          </div>
          
          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute left-0 right-0 top-10 h-0.5 bg-gray-200"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {processSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-white border-3 border-green-500 rounded-full flex items-center justify-center text-lg font-bold text-green-600 mb-3 z-10">
                      {step.step}
                    </div>
                    <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center mb-3 text-green-600 mx-auto">
                      {step.icon}
                    </div>
                    <h3 className="font-bold text-gray-900 mb-1.5">{step.title}</h3>
                    <p className="text-xs text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Billing Features</h2>
            <p className="text-sm text-gray-600 max-w-2xl mx-auto">
              Everything you need for a smooth, worry-free payment experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gray-50 to-white flex items-center justify-center mb-4 border border-gray-100">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{feature.description}</p>
                
                <div className="space-y-1.5">
                  {feature.points.map((point, idx) => (
                    <div key={idx} className="flex items-center text-xs">
                      <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Payment Methods */}
        <section className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 mb-12">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Accepted Payment Methods</h2>
            <p className="text-sm text-gray-600">Choose your preferred way to pay</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {paymentMethods.map((method, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center hover:shadow transition-shadow">
                <div className={`w-12 h-12 rounded-full ${method.color} flex items-center justify-center text-lg mx-auto mb-3`}>
                  {method.icon}
                </div>
                <h3 className="font-semibold text-gray-900 text-sm">{method.name}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Benefits for Patients</h2>
              <div className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm">No Surprise Bills</h4>
                    <p className="text-xs text-gray-600">Clear, upfront pricing before any service is provided</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm">24/7 Access</h4>
                    <p className="text-xs text-gray-600">View bills and payment history anytime through patient portal</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm">Insurance Integration</h4>
                    <p className="text-xs text-gray-600">Direct claims submission to your insurance provider</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm">Payment Reminders</h4>
                    <p className="text-xs text-gray-600">Gentle reminders for upcoming or pending payments</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Security & Privacy</h2>
              <div className="space-y-3">
                <div className="flex items-start">
                  <Lock className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm">HIPAA Compliant</h4>
                    <p className="text-xs text-gray-600">All billing information protected by healthcare privacy laws</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Shield className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm">Bank-Level Security</h4>
                    <p className="text-xs text-gray-600">256-bit SSL encryption for all transactions</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Smartphone className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm">Mobile App</h4>
                    <p className="text-xs text-gray-600">Secure payment processing through our mobile application</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Eye className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm">Transparent Records</h4>
                    <p className="text-xs text-gray-600">Full audit trail and access logs for all transactions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-gradient-to-r from-green-600 to-emerald-700 rounded-xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-3">Ready for Hassle-Free Medical Billing?</h2>
          <p className="text-sm opacity-90 mb-6 max-w-2xl mx-auto">
            Experience transparent, secure, and convenient billing with our healthcare platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="px-6 py-3 bg-white text-green-600 hover:bg-gray-100 font-bold rounded-lg transition-colors text-sm">
              Sign Up Now
            </button>
            <button className="px-6 py-3 bg-transparent border border-white hover:bg-white/10 text-white font-bold rounded-lg transition-colors text-sm">
              Contact Sales
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default BillingPage;