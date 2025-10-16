import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, User, Briefcase, Users } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Separator } from '../components/ui/separator';
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group';

export default function AuthPage() {
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [userType, setUserType] = useState<'freelancer' | 'client' | 'admin'>('freelancer');

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8 items-center">
        {/* Left Side - Branding */}
        <div className="hidden md:block">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-700 to-black flex items-center justify-center shadow-xl">
                <span className="text-white text-2xl">✦</span>
              </div>
              <div>
                <h2 className="bg-gradient-to-r from-gray-800 to-black bg-clip-text text-transparent">
                  FreelanceHub
                </h2>
                <p className="text-gray-600">Your Creative Community</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3>Join the Future of Freelancing</h3>
              <p className="text-gray-600 leading-relaxed">
                Connect with talented professionals, build amazing projects, and grow your business in a community-driven marketplace.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-gray-200 hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="mb-1">50,000+ Active Users</p>
                  <p className="text-sm text-gray-600">Join a thriving community of freelancers and clients</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-gray-200 hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Briefcase className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="mb-1">100,000+ Projects Completed</p>
                  <p className="text-sm text-gray-600">Be part of something amazing</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Auth Form */}
        <Card className="p-8 border-0 bg-white shadow-2xl">
          <Tabs value={authMode} onValueChange={(v) => setAuthMode(v as 'login' | 'signup')}>
            <TabsList className="grid w-full grid-cols-2 mb-8 bg-gray-100 p-1 rounded-full">
              <TabsTrigger value="login" className="rounded-full">Login</TabsTrigger>
              <TabsTrigger value="signup" className="rounded-full">Sign Up</TabsTrigger>
            </TabsList>

            {/* Login Form */}
            <TabsContent value="login" className="space-y-6">
              <div className="text-center mb-6">
                <h3 className="mb-2">Selamat Datang Kembali!</h3>
                <p className="text-gray-600">Masuk untuk melanjutkan ke akun Anda</p>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <div className="relative mt-2">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input 
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      className="pl-10 rounded-xl border-purple-200 focus:border-purple-400"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="password">Password</Label>
                  <div className="relative mt-2">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input 
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      className="pl-10 rounded-xl border-purple-200 focus:border-purple-400"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded border-gray-300" />
                    <span className="text-gray-600">Remember me</span>
                  </label>
                  <a href="#" className="text-gray-700 hover:text-black">Forgot password?</a>
                </div>

                <div className="mb-4">
                  <Label className="mb-3 block text-sm text-gray-600">Login sebagai:</Label>
                  <RadioGroup value={userType} onValueChange={(v) => setUserType(v as 'freelancer' | 'client' | 'admin')}>
                    <div className="flex gap-2">
                      <label 
                        htmlFor="login-freelancer"
                        className={`cursor-pointer rounded-xl border-2 p-3 transition-all flex-1 ${
                          userType === 'freelancer' 
                            ? 'border-blue-500 bg-blue-50' 
                            : 'border-gray-200 hover:border-blue-300'
                        }`}
                      >
                        <div className="flex items-center gap-2 justify-center">
                          <RadioGroupItem value="freelancer" id="login-freelancer" />
                          <p className="text-xs">Freelancer</p>
                        </div>
                      </label>

                      <label 
                        htmlFor="login-client"
                        className={`cursor-pointer rounded-xl border-2 p-3 transition-all flex-1 ${
                          userType === 'client' 
                            ? 'border-indigo-500 bg-indigo-50' 
                            : 'border-gray-200 hover:border-indigo-300'
                        }`}
                      >
                        <div className="flex items-center gap-2 justify-center">
                          <RadioGroupItem value="client" id="login-client" />
                          <p className="text-xs">Client</p>
                        </div>
                      </label>

                      <label 
                        htmlFor="login-admin"
                        className={`cursor-pointer rounded-xl border-2 p-3 transition-all flex-1 ${
                          userType === 'admin' 
                            ? 'border-gray-700 bg-gray-50' 
                            : 'border-gray-200 hover:border-gray-400'
                        }`}
                      >
                        <div className="flex items-center gap-2 justify-center">
                          <RadioGroupItem value="admin" id="login-admin" />
                          <p className="text-xs">Admin</p>
                        </div>
                      </label>
                    </div>
                  </RadioGroup>
                </div>

                <Link to={
                  userType === 'freelancer' ? '/dashboard/freelancer' : 
                  userType === 'client' ? '/dashboard/client' : 
                  '/admin/dashboard'
                }>
                  <Button className={`w-full rounded-full h-12 ${
                    userType === 'freelancer' 
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700' 
                      : userType === 'client'
                      ? 'bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700'
                      : 'bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-800 hover:to-gray-950'
                  }`}>
                    Masuk
                  </Button>
                </Link>
              </div>

              <div className="relative my-6">
                <Separator />
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-4 text-sm text-gray-500">
                  Or continue with
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" className="rounded-full border-purple-200 hover:bg-purple-50">
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Google
                </Button>
                <Button variant="outline" className="rounded-full border-purple-200 hover:bg-purple-50">
                  <svg className="w-5 h-5 mr-2" fill="#1877F2" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Facebook
                </Button>
              </div>
            </TabsContent>

            {/* Sign Up Form */}
            <TabsContent value="signup" className="space-y-6">
              <div className="text-center mb-6">
                <h3 className="mb-2">Buat Akun</h3>
                <p className="text-gray-600">Bergabunglah dengan komunitas kreatif kami hari ini</p>
              </div>

              {/* User Type Selection */}
              <div className="mb-6">
                <Label className="mb-3 block">Saya ingin:</Label>
                <RadioGroup value={userType} onValueChange={(v) => setUserType(v as 'freelancer' | 'client' | 'admin')}>
                  <div className="grid grid-cols-2 gap-3">
                    <label 
                      htmlFor="freelancer"
                      className={`cursor-pointer rounded-xl border-2 p-4 transition-all ${
                        userType === 'freelancer' 
                          ? 'border-blue-500 bg-blue-50' 
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <RadioGroupItem value="freelancer" id="freelancer" />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <Briefcase className="w-4 h-4 text-blue-600" />
                            <p className="text-sm">Bekerja sebagai Freelancer</p>
                          </div>
                          <p className="text-xs text-gray-600">Cari proyek & hasilkan uang</p>
                        </div>
                      </div>
                    </label>

                    <label 
                      htmlFor="client"
                      className={`cursor-pointer rounded-xl border-2 p-4 transition-all ${
                        userType === 'client' 
                          ? 'border-indigo-500 bg-indigo-50' 
                          : 'border-gray-200 hover:border-indigo-300'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <RadioGroupItem value="client" id="client" />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <Users className="w-4 h-4 text-indigo-600" />
                            <p className="text-sm">Mempekerjakan Talenta</p>
                          </div>
                          <p className="text-xs text-gray-600">Posting proyek & rekrut</p>
                        </div>
                      </div>
                    </label>
                  </div>
                  
                  {/* Admin Option - Full Width */}
                  <label 
                    htmlFor="admin"
                    className={`cursor-pointer rounded-xl border-2 p-4 transition-all mt-3 block ${
                      userType === 'admin' 
                        ? 'border-gray-700 bg-gray-50' 
                        : 'border-gray-200 hover:border-gray-400'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="admin" id="admin" />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <User className="w-4 h-4 text-gray-700" />
                          <p className="text-sm">Login sebagai Admin</p>
                        </div>
                        <p className="text-xs text-gray-600">Kelola platform & pengguna</p>
                      </div>
                    </div>
                  </label>
                </RadioGroup>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="signup-name">Full Name</Label>
                  <div className="relative mt-2">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input 
                      id="signup-name"
                      type="text"
                      placeholder="John Doe"
                      className="pl-10 rounded-xl border-purple-200 focus:border-purple-400"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="signup-email">Email Address</Label>
                  <div className="relative mt-2">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input 
                      id="signup-email"
                      type="email"
                      placeholder="you@example.com"
                      className="pl-10 rounded-xl border-purple-200 focus:border-purple-400"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="signup-password">Password</Label>
                  <div className="relative mt-2">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input 
                      id="signup-password"
                      type="password"
                      placeholder="••••••••"
                      className="pl-10 rounded-xl border-purple-200 focus:border-purple-400"
                    />
                  </div>
                </div>

                <div className="text-sm text-gray-600">
                  <label className="flex items-start gap-2 cursor-pointer">
                    <input type="checkbox" className="mt-1 rounded border-gray-300" />
                    <span>
                      I agree to the{' '}
                      <a href="#" className="text-purple-600 hover:text-purple-700">Terms of Service</a>
                      {' '}and{' '}
                      <a href="#" className="text-purple-600 hover:text-purple-700">Privacy Policy</a>
                    </span>
                  </label>
                </div>

                <Link to={
                  userType === 'freelancer' ? '/dashboard/freelancer' : 
                  userType === 'client' ? '/dashboard/client' : 
                  '/admin/dashboard'
                }>
                  <Button className={`w-full rounded-full h-12 ${
                    userType === 'freelancer' 
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700' 
                      : userType === 'client'
                      ? 'bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700'
                      : 'bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-800 hover:to-gray-950'
                  }`}>
                    Buat Akun
                  </Button>
                </Link>
              </div>

              <div className="relative my-6">
                <Separator />
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-4 text-sm text-gray-500">
                  Or sign up with
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" className="rounded-full border-purple-200 hover:bg-purple-50">
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Google
                </Button>
                <Button variant="outline" className="rounded-full border-purple-200 hover:bg-purple-50">
                  <svg className="w-5 h-5 mr-2" fill="#1877F2" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Facebook
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </div>
  );
}
