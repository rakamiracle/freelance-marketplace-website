import { useState } from 'react';
import { Save, Globe, DollarSign, Shield, Bell, Mail, Settings as SettingsIcon } from 'lucide-react';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Switch } from '../../components/ui/switch';
import { Textarea } from '../../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { toast } from 'sonner@2.0.3';
import AdminSidebar from '../../components/AdminSidebar';

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    // General Settings
    platformName: 'FreelanceHub',
    platformDescription: 'Platform freelance terbaik di Indonesia',
    supportEmail: 'support@freelancehub.com',
    language: 'id',
    
    // Commission Settings
    freelancerCommission: '10',
    clientCommission: '3',
    minimumWithdrawal: '50',
    
    // Security Settings
    twoFactorAuth: true,
    passwordExpiry: false,
    sessionTimeout: '30',
    
    // Notification Settings
    emailNotifications: true,
    projectAlerts: true,
    weeklyReports: true,
    systemUpdates: false,
    
    // Email Settings
    smtpServer: 'smtp.gmail.com',
    smtpPort: '587',
    smtpUsername: 'noreply@freelancehub.com',
    
    // Policies
    termsOfService: 'Syarat dan ketentuan penggunaan platform...',
    privacyPolicy: 'Kebijakan privasi dan perlindungan data...',
    refundPolicy: 'Kebijakan pengembalian dana...'
  });

  const handleSave = () => {
    toast.success('Pengaturan berhasil disimpan', {
      description: 'Semua perubahan telah diterapkan'
    });
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
      <AdminSidebar />
      <div className="flex-1 ml-64 py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="mb-2">Pengaturan Platform</h1>
            <p className="text-gray-600">Kelola konfigurasi dan kebijakan platform</p>
          </div>
          <Button 
            className="rounded-full bg-black hover:bg-gray-800 text-white"
            onClick={handleSave}
          >
            <Save className="w-4 h-4 mr-2" />
            Simpan Perubahan
          </Button>
        </div>

        <Tabs defaultValue="general" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 bg-white p-1 rounded-xl shadow-lg">
            <TabsTrigger value="general" className="rounded-lg">
              <Globe className="w-4 h-4 mr-2" />
              Umum
            </TabsTrigger>
            <TabsTrigger value="commission" className="rounded-lg">
              <DollarSign className="w-4 h-4 mr-2" />
              Komisi
            </TabsTrigger>
            <TabsTrigger value="security" className="rounded-lg">
              <Shield className="w-4 h-4 mr-2" />
              Keamanan
            </TabsTrigger>
            <TabsTrigger value="notifications" className="rounded-lg">
              <Bell className="w-4 h-4 mr-2" />
              Notifikasi
            </TabsTrigger>
            <TabsTrigger value="email" className="rounded-lg">
              <Mail className="w-4 h-4 mr-2" />
              Email
            </TabsTrigger>
          </TabsList>

          {/* General Settings */}
          <TabsContent value="general">
            <Card className="p-6 border-0 bg-white shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gray-700 to-black flex items-center justify-center">
                  <SettingsIcon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3>Pengaturan Umum</h3>
                  <p className="text-sm text-gray-600">Konfigurasi dasar platform</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <Label>Nama Platform</Label>
                  <Input
                    value={settings.platformName}
                    onChange={(e) => setSettings({ ...settings, platformName: e.target.value })}
                    className="mt-2 rounded-xl"
                  />
                </div>

                <div>
                  <Label>Deskripsi Platform</Label>
                  <Textarea
                    value={settings.platformDescription}
                    onChange={(e) => setSettings({ ...settings, platformDescription: e.target.value })}
                    className="mt-2 rounded-xl h-24"
                  />
                </div>

                <div>
                  <Label>Email Dukungan</Label>
                  <Input
                    type="email"
                    value={settings.supportEmail}
                    onChange={(e) => setSettings({ ...settings, supportEmail: e.target.value })}
                    className="mt-2 rounded-xl"
                  />
                  <p className="text-xs text-gray-500 mt-2">Email untuk pertanyaan dan dukungan pengguna</p>
                </div>

                <div>
                  <Label>Bahasa Default</Label>
                  <Select value={settings.language} onValueChange={(value) => setSettings({ ...settings, language: value })}>
                    <SelectTrigger className="mt-2 rounded-xl">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="id">Indonesia</SelectItem>
                      <SelectItem value="en">English</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Commission Settings */}
          <TabsContent value="commission">
            <Card className="p-6 border-0 bg-white shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gray-700 to-black flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3>Pengaturan Komisi</h3>
                  <p className="text-sm text-gray-600">Kelola biaya platform dan komisi</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <Label>Komisi Freelancer (%)</Label>
                  <Input
                    type="number"
                    value={settings.freelancerCommission}
                    onChange={(e) => setSettings({ ...settings, freelancerCommission: e.target.value })}
                    className="mt-2 rounded-xl"
                  />
                  <p className="text-xs text-gray-500 mt-2">Persentase yang dipotong dari setiap pembayaran ke freelancer</p>
                </div>

                <div>
                  <Label>Komisi Klien (%)</Label>
                  <Input
                    type="number"
                    value={settings.clientCommission}
                    onChange={(e) => setSettings({ ...settings, clientCommission: e.target.value })}
                    className="mt-2 rounded-xl"
                  />
                  <p className="text-xs text-gray-500 mt-2">Biaya layanan yang dikenakan kepada klien</p>
                </div>

                <div>
                  <Label>Minimum Penarikan ($)</Label>
                  <Input
                    type="number"
                    value={settings.minimumWithdrawal}
                    onChange={(e) => setSettings({ ...settings, minimumWithdrawal: e.target.value })}
                    className="mt-2 rounded-xl"
                  />
                  <p className="text-xs text-gray-500 mt-2">Jumlah minimum yang dapat ditarik oleh freelancer</p>
                </div>

                <div className="p-4 bg-gray-50 rounded-xl">
                  <p className="text-sm mb-2">Estimasi Pendapatan Platform</p>
                  <div className="space-y-1 text-xs text-gray-600">
                    <p>• Komisi Freelancer: {settings.freelancerCommission}% dari setiap transaksi</p>
                    <p>• Komisi Klien: {settings.clientCommission}% dari setiap proyek</p>
                    <p>• Total estimasi komisi: {parseFloat(settings.freelancerCommission) + parseFloat(settings.clientCommission)}%</p>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Security Settings */}
          <TabsContent value="security">
            <Card className="p-6 border-0 bg-white shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gray-700 to-black flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3>Pengaturan Keamanan</h3>
                  <p className="text-sm text-gray-600">Konfigurasi keamanan dan autentikasi</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div>
                    <p className="text-sm mb-1">Autentikasi Dua Faktor</p>
                    <p className="text-xs text-gray-600">Wajibkan 2FA untuk semua pengguna</p>
                  </div>
                  <Switch
                    checked={settings.twoFactorAuth}
                    onCheckedChange={(checked) => setSettings({ ...settings, twoFactorAuth: checked })}
                  />
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div>
                    <p className="text-sm mb-1">Kadaluarsa Password</p>
                    <p className="text-xs text-gray-600">Password harus diganti setiap 90 hari</p>
                  </div>
                  <Switch
                    checked={settings.passwordExpiry}
                    onCheckedChange={(checked) => setSettings({ ...settings, passwordExpiry: checked })}
                  />
                </div>

                <div>
                  <Label>Timeout Sesi (menit)</Label>
                  <Input
                    type="number"
                    value={settings.sessionTimeout}
                    onChange={(e) => setSettings({ ...settings, sessionTimeout: e.target.value })}
                    className="mt-2 rounded-xl"
                  />
                  <p className="text-xs text-gray-500 mt-2">Pengguna akan keluar otomatis setelah tidak aktif</p>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Notification Settings */}
          <TabsContent value="notifications">
            <Card className="p-6 border-0 bg-white shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gray-700 to-black flex items-center justify-center">
                  <Bell className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3>Pengaturan Notifikasi</h3>
                  <p className="text-sm text-gray-600">Kelola notifikasi sistem</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div>
                    <p className="text-sm mb-1">Notifikasi Email</p>
                    <p className="text-xs text-gray-600">Kirim email untuk event penting</p>
                  </div>
                  <Switch
                    checked={settings.emailNotifications}
                    onCheckedChange={(checked) => setSettings({ ...settings, emailNotifications: checked })}
                  />
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div>
                    <p className="text-sm mb-1">Notifikasi Proyek</p>
                    <p className="text-xs text-gray-600">Beritahu admin tentang proyek baru</p>
                  </div>
                  <Switch
                    checked={settings.projectAlerts}
                    onCheckedChange={(checked) => setSettings({ ...settings, projectAlerts: checked })}
                  />
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div>
                    <p className="text-sm mb-1">Laporan Mingguan</p>
                    <p className="text-xs text-gray-600">Kirim ringkasan mingguan ke admin</p>
                  </div>
                  <Switch
                    checked={settings.weeklyReports}
                    onCheckedChange={(checked) => setSettings({ ...settings, weeklyReports: checked })}
                  />
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div>
                    <p className="text-sm mb-1">Update Sistem</p>
                    <p className="text-xs text-gray-600">Beritahu tentang pembaruan platform</p>
                  </div>
                  <Switch
                    checked={settings.systemUpdates}
                    onCheckedChange={(checked) => setSettings({ ...settings, systemUpdates: checked })}
                  />
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Email Settings */}
          <TabsContent value="email">
            <Card className="p-6 border-0 bg-white shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gray-700 to-black flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3>Pengaturan Email</h3>
                  <p className="text-sm text-gray-600">Konfigurasi SMTP dan email</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <Label>SMTP Server</Label>
                  <Input
                    value={settings.smtpServer}
                    onChange={(e) => setSettings({ ...settings, smtpServer: e.target.value })}
                    className="mt-2 rounded-xl"
                  />
                </div>

                <div>
                  <Label>SMTP Port</Label>
                  <Input
                    value={settings.smtpPort}
                    onChange={(e) => setSettings({ ...settings, smtpPort: e.target.value })}
                    className="mt-2 rounded-xl"
                  />
                </div>

                <div>
                  <Label>SMTP Username</Label>
                  <Input
                    type="email"
                    value={settings.smtpUsername}
                    onChange={(e) => setSettings({ ...settings, smtpUsername: e.target.value })}
                    className="mt-2 rounded-xl"
                  />
                </div>

                <div>
                  <Label>SMTP Password</Label>
                  <Input
                    type="password"
                    placeholder="••••••••"
                    className="mt-2 rounded-xl"
                  />
                  <p className="text-xs text-gray-500 mt-2">Kosongkan jika tidak ingin mengubah password</p>
                </div>

                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    className="rounded-full flex-1"
                    onClick={() => toast.info('Mengirim email test...')}
                  >
                    Test Email
                  </Button>
                  <Button 
                    className="rounded-full flex-1 bg-black hover:bg-gray-800 text-white"
                    onClick={handleSave}
                  >
                    Simpan Konfigurasi
                  </Button>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
        </div>
      </div>
    </div>
  );
}
