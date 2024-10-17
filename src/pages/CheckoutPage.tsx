import React, { useState } from 'react'
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Textarea } from "../components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group"
import { Checkbox } from "../components/ui/checkbox"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { CreditCard, MapPin, Gift, Save } from 'lucide-react'

export default function CheckoutPage() {
  const [address, setAddress] = useState({
    fullName: '',
    streetAddress: '',
    city: '',
    state: '',
    zipCode: '',
    country: ''
  })
  const [paymentMethod, setPaymentMethod] = useState('credit-card')
  const [referralCode, setReferralCode] = useState('')
  const [couponCode, setCouponCode] = useState('')
  const [saveInfo, setSaveInfo] = useState(false)

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setAddress({ ...address, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log('Checkout data:', { address, paymentMethod, referralCode, couponCode, saveInfo })
    alert('Order placed successfully!')
  }

  return (
    <div className="container mx-auto p-4 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      <form onSubmit={handleSubmit}>
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center">
              <MapPin className="mr-2" />
              Shipping Address
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div>
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  name="fullName"
                  value={address.fullName}
                  onChange={handleAddressChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="streetAddress">Street Address</Label>
                <Textarea
                  id="streetAddress"
                  name="streetAddress"
                  value={address.streetAddress}
                  onChange={handleAddressChange}
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="city">City</Label>
                  <Input
                    id="city"
                    name="city"
                    value={address.city}
                    onChange={handleAddressChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="state">State</Label>
                  <Input
                    id="state"
                    name="state"
                    value={address.state}
                    onChange={handleAddressChange}
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="zipCode">ZIP Code</Label>
                  <Input
                    id="zipCode"
                    name="zipCode"
                    value={address.zipCode}
                    onChange={handleAddressChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="country">Country</Label>
                  <Input
                    id="country"
                    name="country"
                    value={address.country}
                    onChange={handleAddressChange}
                    required
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center">
              <CreditCard className="mr-2" />
              Payment Method
            </CardTitle>
          </CardHeader>
          <CardContent>
            <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="credit-card" id="credit-card" />
                <Label htmlFor="credit-card">Credit Card</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="paypal" id="paypal" />
                <Label htmlFor="paypal">PayPal</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="bank-transfer" id="bank-transfer" />
                <Label htmlFor="bank-transfer">Bank Transfer</Label>
              </div>
            </RadioGroup>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Gift className="mr-2" />
              Referrals and Coupons
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div>
                <Label htmlFor="referralCode">Referral Code</Label>
                <Input
                  id="referralCode"
                  value={referralCode}
                  onChange={(e) => setReferralCode(e.target.value)}
                  placeholder="Enter referral code"
                />
              </div>
              <div>
                <Label htmlFor="couponCode">Coupon Code</Label>
                <Input
                  id="couponCode"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  placeholder="Enter coupon code"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex items-center space-x-2 mb-6">
          <Checkbox id="saveInfo" checked={saveInfo} onCheckedChange={(checked) => setSaveInfo(checked as boolean)} />
          <Label htmlFor="saveInfo" className="flex items-center">
            <Save className="mr-2" />
            Save address and payment method to my account
          </Label>
        </div>

        <Button type="submit" className="w-full">
          Place Order
        </Button>
      </form>
    </div>
  )
}