import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Check, Upload, DollarSign, Clock, FileText } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Textarea } from '../../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { RadioGroup, RadioGroupItem } from '../../components/ui/radio-group';
import { Badge } from '../../components/ui/badge';
import { toast } from 'sonner@2.0.3';

const steps = [
  { id: 1, title: 'Detail Proyek', icon: FileText },
  { id: 2, title: 'Anggaran & Waktu', icon: DollarSign },
  { id: 3, title: 'Persyaratan', icon: Upload },
  { id: 4, title: 'Tinjau & Posting', icon: Check }
];

interface FormData {
  title: string;
  category: string;
  description: string;
  budgetType: string;
  budgetMin: string;
  budgetMax: string;
  duration: string;
  skills: string[];
}

interface ValidationErrors {
  title?: string;
  category?: string;
  description?: string;
  budgetMin?: string;
  budgetMax?: string;
  duration?: string;
}

export default function PostProjectPage() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [formData, setFormData] = useState<FormData>({
    title: '',
    category: '',
    description: '',
    budgetType: 'fixed',
    budgetMin: '',
    budgetMax: '',
    duration: '',
    skills: []
  });

  const validateStep = (step: number): boolean => {
    const newErrors: ValidationErrors = {};

    if (step === 1) {
      if (!formData.title.trim()) {
        newErrors.title = 'Judul proyek wajib diisi';
      } else if (formData.title.trim().length < 10) {
        newErrors.title = 'Judul proyek minimal 10 karakter';
      }

      if (!formData.category) {
        newErrors.category = 'Kategori wajib dipilih';
      }

      if (!formData.description.trim()) {
        newErrors.description = 'Deskripsi proyek wajib diisi';
      } else if (formData.description.trim().length < 50) {
        newErrors.description = 'Deskripsi proyek minimal 50 karakter';
      }
    }

    if (step === 2) {
      if (!formData.budgetMin) {
        newErrors.budgetMin = 'Anggaran minimum wajib diisi';
      } else if (parseFloat(formData.budgetMin) < 10) {
        newErrors.budgetMin = 'Anggaran minimum harus lebih dari $10';
      }

      if (!formData.budgetMax) {
        newErrors.budgetMax = 'Anggaran maksimum wajib diisi';
      } else if (parseFloat(formData.budgetMax) < parseFloat(formData.budgetMin)) {
        newErrors.budgetMax = 'Anggaran maksimum harus lebih besar dari minimum';
      }

      if (!formData.duration) {
        newErrors.duration = 'Durasi proyek wajib dipilih';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (currentStep < 4) {
      if (validateStep(currentStep)) {
        setCurrentStep(currentStep + 1);
      } else {
        toast.error('Mohon lengkapi semua field yang diperlukan');
      }
    } else {
      // Submit the project
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    // Simpan data ke localStorage
    const existingProjects = JSON.parse(localStorage.getItem('postedProjects') || '[]');
    const newProject = {
      id: Date.now(),
      ...formData,
      status: 'active',
      postedDate: new Date().toISOString(),
      proposalsCount: 0
    };
    existingProjects.push(newProject);
    localStorage.setItem('postedProjects', JSON.stringify(existingProjects));

    toast.success('Proyek berhasil diposting!', {
      description: 'Freelancer sekarang dapat melihat dan mengajukan proposal untuk proyek Anda.'
    });

    // Redirect after a short delay
    setTimeout(() => {
      navigate('/dashboard/client');
    }, 1500);
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="mb-2">Posting Proyek Baru</h1>
          <p className="text-gray-600">Ceritakan tentang proyek Anda dan temukan freelancer yang sempurna</p>
        </div>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-between relative">
            {/* Progress Line */}
            <div className="absolute top-5 left-0 right-0 h-1 bg-gray-200 -z-10">
              <div 
                className="h-full bg-gradient-to-r from-gray-700 to-black transition-all duration-500"
                style={{ width: `${((currentStep - 1) / 3) * 100}%` }}
              ></div>
            </div>

            {steps.map((step) => {
              const Icon = step.icon;
              const isCompleted = currentStep > step.id;
              const isCurrent = currentStep === step.id;
              
              return (
                <div key={step.id} className="flex flex-col items-center gap-2 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 px-2">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                    isCompleted 
                      ? 'bg-black' 
                      : isCurrent 
                      ? 'bg-gradient-to-r from-gray-700 to-black' 
                      : 'bg-gray-300'
                  }`}>
                    {isCompleted ? (
                      <Check className="w-5 h-5 text-white" />
                    ) : (
                      <Icon className={`w-5 h-5 ${isCurrent ? 'text-white' : 'text-gray-500'}`} />
                    )}
                  </div>
                  <p className={`text-xs text-center ${
                    isCurrent ? 'text-black' : 'text-gray-600'
                  }`}>
                    {step.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Form Steps */}
        <Card className="p-8 border-0 bg-white shadow-lg">
          {/* Step 1: Project Details */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div>
                <h2 className="mb-6">Detail Proyek</h2>
              </div>

              <div>
                <Label>Judul Proyek *</Label>
                <Input
                  placeholder="contoh: Desain Logo Modern untuk Startup Teknologi"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className={`mt-2 rounded-xl ${errors.title ? 'border-gray-800' : ''}`}
                />
                {errors.title && <p className="text-xs text-gray-800 mt-2">{errors.title}</p>}
                {!errors.title && <p className="text-xs text-gray-500 mt-2">Buat judul yang spesifik dan deskriptif</p>}
              </div>

              <div>
                <Label>Kategori *</Label>
                <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })}>
                  <SelectTrigger className={`mt-2 rounded-xl ${errors.category ? 'border-gray-800' : ''}`}>
                    <SelectValue placeholder="Pilih kategori" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="design">Desain</SelectItem>
                    <SelectItem value="development">Pengembangan</SelectItem>
                    <SelectItem value="writing">Penulisan & Konten</SelectItem>
                    <SelectItem value="marketing">Pemasaran</SelectItem>
                    <SelectItem value="video">Video & Animasi</SelectItem>
                    <SelectItem value="music">Musik & Audio</SelectItem>
                  </SelectContent>
                </Select>
                {errors.category && <p className="text-xs text-gray-800 mt-2">{errors.category}</p>}
              </div>

              <div>
                <Label>Deskripsi Proyek *</Label>
                <Textarea
                  placeholder="Deskripsikan proyek Anda secara detail. Sertakan tujuan, hasil yang diharapkan, dan persyaratan spesifik..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className={`mt-2 rounded-xl h-40 ${errors.description ? 'border-gray-800' : ''}`}
                />
                {errors.description && <p className="text-xs text-gray-800 mt-2">{errors.description}</p>}
                {!errors.description && (
                  <p className="text-xs text-gray-500 mt-2">
                    Minimum 50 karakter ({formData.description.length}/50)
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Step 2: Budget & Timeline */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div>
                <h2 className="mb-6">Anggaran & Waktu</h2>
              </div>

              <div>
                <Label>Tipe Anggaran *</Label>
                <RadioGroup 
                  value={formData.budgetType}
                  onValueChange={(value) => setFormData({ ...formData, budgetType: value })}
                  className="mt-3 space-y-3"
                >
                  <div className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-xl hover:border-gray-400 transition-colors cursor-pointer">
                    <RadioGroupItem value="fixed" id="fixed" />
                    <Label htmlFor="fixed" className="flex-1 cursor-pointer">
                      <p className="mb-1">Harga Tetap</p>
                      <p className="text-sm text-gray-600">Tetapkan anggaran spesifik untuk seluruh proyek</p>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-xl hover:border-gray-400 transition-colors cursor-pointer">
                    <RadioGroupItem value="hourly" id="hourly" />
                    <Label htmlFor="hourly" className="flex-1 cursor-pointer">
                      <p className="mb-1">Per Jam</p>
                      <p className="text-sm text-gray-600">Bayar berdasarkan jam kerja</p>
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {formData.budgetType === 'fixed' ? (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Anggaran Minimum ($) *</Label>
                    <Input
                      type="number"
                      placeholder="500"
                      value={formData.budgetMin}
                      onChange={(e) => setFormData({ ...formData, budgetMin: e.target.value })}
                      className={`mt-2 rounded-xl ${errors.budgetMin ? 'border-gray-800' : ''}`}
                    />
                    {errors.budgetMin && <p className="text-xs text-gray-800 mt-2">{errors.budgetMin}</p>}
                  </div>
                  <div>
                    <Label>Anggaran Maksimum ($) *</Label>
                    <Input
                      type="number"
                      placeholder="1000"
                      value={formData.budgetMax}
                      onChange={(e) => setFormData({ ...formData, budgetMax: e.target.value })}
                      className={`mt-2 rounded-xl ${errors.budgetMax ? 'border-gray-800' : ''}`}
                    />
                    {errors.budgetMax && <p className="text-xs text-gray-800 mt-2">{errors.budgetMax}</p>}
                  </div>
                </div>
              ) : (
                <div>
                  <Label>Rentang Tarif Per Jam ($) *</Label>
                  <div className="grid grid-cols-2 gap-4 mt-2">
                    <Input
                      type="number"
                      placeholder="Min: 25"
                      value={formData.budgetMin}
                      onChange={(e) => setFormData({ ...formData, budgetMin: e.target.value })}
                      className={`rounded-xl ${errors.budgetMin ? 'border-gray-800' : ''}`}
                    />
                    <Input
                      type="number"
                      placeholder="Max: 50"
                      value={formData.budgetMax}
                      onChange={(e) => setFormData({ ...formData, budgetMax: e.target.value })}
                      className={`rounded-xl ${errors.budgetMax ? 'border-gray-800' : ''}`}
                    />
                  </div>
                  {(errors.budgetMin || errors.budgetMax) && (
                    <p className="text-xs text-gray-800 mt-2">{errors.budgetMin || errors.budgetMax}</p>
                  )}
                </div>
              )}

              <div>
                <Label>Durasi Proyek *</Label>
                <Select value={formData.duration} onValueChange={(value) => setFormData({ ...formData, duration: value })}>
                  <SelectTrigger className={`mt-2 rounded-xl ${errors.duration ? 'border-gray-800' : ''}`}>
                    <SelectValue placeholder="Pilih durasi yang diharapkan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-3">1-3 hari</SelectItem>
                    <SelectItem value="3-7">3-7 hari</SelectItem>
                    <SelectItem value="1-2w">1-2 minggu</SelectItem>
                    <SelectItem value="2-4w">2-4 minggu</SelectItem>
                    <SelectItem value="1m+">1 bulan+</SelectItem>
                  </SelectContent>
                </Select>
                {errors.duration && <p className="text-xs text-gray-800 mt-2">{errors.duration}</p>}
              </div>
            </div>
          )}

          {/* Step 3: Requirements */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div>
                <h2 className="mb-6">Persyaratan & Keahlian</h2>
              </div>

              <div>
                <Label>Keahlian yang Dibutuhkan</Label>
                <Input
                  placeholder="Ketik keahlian dan tekan Enter"
                  className="mt-2 rounded-xl"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      const value = (e.target as HTMLInputElement).value;
                      if (value && !formData.skills.includes(value)) {
                        setFormData({ ...formData, skills: [...formData.skills, value] });
                        (e.target as HTMLInputElement).value = '';
                      }
                    }
                  }}
                />
                <div className="flex flex-wrap gap-2 mt-3">
                  {formData.skills.map((skill, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="border-gray-400 text-gray-700 px-4 py-1 cursor-pointer hover:bg-gray-100"
                      onClick={() => setFormData({ ...formData, skills: formData.skills.filter((_, i) => i !== index) })}
                    >
                      {skill} ×
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <Label>File Proyek (Opsional)</Label>
                <div className="mt-2 border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-gray-500 transition-colors cursor-pointer">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Klik untuk mengunggah atau drag and drop</p>
                  <p className="text-xs text-gray-500 mt-1">Dokumen, gambar, atau file referensi apapun</p>
                </div>
              </div>

              <div className="p-4 bg-gray-100 border border-gray-300 rounded-xl">
                <p className="text-sm text-gray-700">
                  <strong>💡 Tips:</strong> Semakin banyak detail yang Anda berikan, semakin baik proposal yang akan Anda terima dari freelancer.
                </p>
              </div>
            </div>
          )}

          {/* Step 4: Review & Post */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <div>
                <h2 className="mb-6">Tinjau Proyek Anda</h2>
              </div>

              <Card className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 border-0">
                <h3 className="mb-4">{formData.title || 'Judul Proyek'}</h3>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Kategori</p>
                    <Badge className="bg-black text-white border-0">
                      {formData.category ? 
                        formData.category === 'design' ? 'Desain' :
                        formData.category === 'development' ? 'Pengembangan' :
                        formData.category === 'writing' ? 'Penulisan & Konten' :
                        formData.category === 'marketing' ? 'Pemasaran' :
                        formData.category === 'video' ? 'Video & Animasi' :
                        'Musik & Audio'
                        : 'Belum dipilih'}
                    </Badge>
                  </div>

                  <div>
                    <p className="text-sm text-gray-600 mb-1">Deskripsi</p>
                    <p className="text-gray-700">{formData.description || 'Tidak ada deskripsi'}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Anggaran</p>
                      <p className="text-black">
                        ${formData.budgetMin || '0'} - ${formData.budgetMax || '0'}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Durasi</p>
                      <p className="text-black">
                        {formData.duration === '1-3' ? '1-3 hari' :
                         formData.duration === '3-7' ? '3-7 hari' :
                         formData.duration === '1-2w' ? '1-2 minggu' :
                         formData.duration === '2-4w' ? '2-4 minggu' :
                         formData.duration === '1m+' ? '1 bulan+' :
                         'Belum dipilih'}
                      </p>
                    </div>
                  </div>

                  {formData.skills.length > 0 && (
                    <div>
                      <p className="text-sm text-gray-600 mb-2">Keahlian yang Dibutuhkan</p>
                      <div className="flex flex-wrap gap-2">
                        {formData.skills.map((skill, index) => (
                          <Badge key={index} variant="outline" className="border-gray-400 text-gray-700">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </Card>

              <div className="p-4 bg-gray-100 border border-gray-300 rounded-xl">
                <p className="text-sm text-gray-700">
                  <strong>⚠️ Penting:</strong> Setelah diposting, proyek Anda akan terlihat oleh semua freelancer. Anda dapat mengeditnya nanti dari dashboard Anda.
                </p>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-100">
            <Button
              variant="outline"
              className="rounded-full"
              onClick={handleBack}
              disabled={currentStep === 1}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Kembali
            </Button>

            <div className="flex items-center gap-2">
              {steps.map((step) => (
                <div
                  key={step.id}
                  className={`w-2 h-2 rounded-full transition-all ${
                    step.id === currentStep ? 'w-8 bg-black' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <Button
              className="rounded-full bg-gradient-to-r from-gray-700 to-black hover:from-gray-800 hover:to-gray-900 text-white"
              onClick={handleNext}
            >
              {currentStep === 4 ? 'Posting Proyek' : 'Selanjutnya'}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
