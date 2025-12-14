import React, { useState } from 'react';
import { 
  User, 
  Bell, 
  Shield, 
  CreditCard, 
  Globe, 
  Moon, 
  Lock, 
  Mail, 
  Smartphone,
  Eye,
  EyeOff,
  Check,
  X,
  Download,
  Upload,
  HelpCircle,
  LogOut,
  Trash2,
  Key,
  Database,
  MessageSquare,
  Volume2,
  Palette,
  Calendar,
  Clock
} from 'lucide-react';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [darkMode, setDarkMode] = useState(false);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [language, setLanguage] = useState('english');
  const [timezone, setTimezone] = useState('UTC-5');
  const [dateFormat, setDateFormat] = useState('MM/DD/YYYY');

  const [profileData, setProfileData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    bio: 'Medical professional specializing in cardiology. Available for consultations Monday through Friday.',
    location: 'New York, NY',
    specialty: 'Cardiologist',
    hospital: 'New York Medical Center'
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'billing', label: 'Billing', icon: CreditCard },
    { id: 'preferences', label: 'Preferences', icon: Palette },
    { id: 'privacy', label: 'Privacy', icon: Lock }
  ];

  const languages = [
    { value: 'english', label: 'English' },
    { value: 'spanish', label: 'Spanish' },
    { value: 'french', label: 'French' },
    { value: 'german', label: 'German' },
    { value: 'chinese', label: 'Chinese' }
  ];

  const timezones = [
    { value: 'UTC-5', label: 'EST (UTC-5)' },
    { value: 'UTC-8', label: 'PST (UTC-8)' },
    { value: 'UTC+0', label: 'GMT (UTC+0)' },
    { value: 'UTC+1', label: 'CET (UTC+1)' },
    { value: 'UTC+8', label: 'CST (UTC+8)' }
  ];

  const dateFormats = [
    { value: 'MM/DD/YYYY', label: 'MM/DD/YYYY' },
    { value: 'DD/MM/YYYY', label: 'DD/MM/YYYY' },
    { value: 'YYYY-MM-DD', label: 'YYYY-MM-DD' }
  ];

  const handleProfileUpdate = (field, value) => {
    setProfileData(prev => ({ ...prev, [field]: value }));
  };

  const handlePasswordUpdate = (field, value) => {
    setPasswordData(prev => ({ ...prev, [field]: value }));
  };

  const handleSaveProfile = () => {
    // In a real app, you would make an API call here
    alert('Profile updated successfully!');
  };

  const handleChangePassword = () => {
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert('New passwords do not match!');
      return;
    }
    // In a real app, you would make an API call here
    alert('Password changed successfully!');
    setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
  };

  const handleExportData = () => {
    alert('Data export started. You will receive an email when it\'s ready.');
  };

  const handleDeleteAccount = () => {
    if (window.confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      alert('Account deletion requested. You will receive a confirmation email.');
    }
  };

  const renderProfileTab = () => (
    <div className="space-y-6">
      {/* Profile Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Profile Settings</h2>
          <p className="text-gray-600">Manage your personal and professional information</p>
        </div>
        <button
          onClick={handleSaveProfile}
          className="px-6 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          Save Changes
        </button>
      </div>

      {/* Profile Photo */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex items-center space-x-6">
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-linear-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-3xl font-bold">
              {profileData.firstName[0]}{profileData.lastName[0]}
            </div>
            <button className="absolute bottom-0 right-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
              <Upload className="w-4 h-4" />
            </button>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Profile Picture</h3>
            <p className="text-gray-600 text-sm">Recommended: Square JPG, PNG at least 400x400 pixels</p>
            <div className="flex space-x-3 mt-3">
              <button className="px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                Upload New
              </button>
              <button className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Personal Information */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
          <User className="w-5 h-5 mr-2" />
          Personal Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
            <input
              type="text"
              value={profileData.firstName}
              onChange={(e) => handleProfileUpdate('firstName', e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
            <input
              type="text"
              value={profileData.lastName}
              onChange={(e) => handleProfileUpdate('lastName', e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 items-center">
              <Mail className="w-4 h-4 mr-2" />
              Email Address
            </label>
            <input
              type="email"
              value={profileData.email}
              onChange={(e) => handleProfileUpdate('email', e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 items-center">
              <Smartphone className="w-4 h-4 mr-2" />
              Phone Number
            </label>
            <input
              type="tel"
              value={profileData.phone}
              onChange={(e) => handleProfileUpdate('phone', e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
            <input
              type="text"
              value={profileData.location}
              onChange={(e) => handleProfileUpdate('location', e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Specialty</label>
            <input
              type="text"
              value={profileData.specialty}
              onChange={(e) => handleProfileUpdate('specialty', e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Hospital/Affiliation</label>
            <input
              type="text"
              value={profileData.hospital}
              onChange={(e) => handleProfileUpdate('hospital', e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
            <textarea
              value={profileData.bio}
              onChange={(e) => handleProfileUpdate('bio', e.target.value)}
              rows="4"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            />
            <p className="text-gray-500 text-sm mt-2">Brief description for your profile. Max 250 characters.</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSecurityTab = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Security Settings</h2>
        <p className="text-gray-600">Manage your account security and authentication</p>
      </div>

      {/* Password Change */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
          <Key className="w-5 h-5 mr-2" />
          Change Password
        </h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
            <div className="relative">
              <input
                type={showCurrentPassword ? "text" : "password"}
                value={passwordData.currentPassword}
                onChange={(e) => handlePasswordUpdate('currentPassword', e.target.value)}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all pr-12"
              />
              <button
                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showCurrentPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
            <div className="relative">
              <input
                type={showNewPassword ? "text" : "password"}
                value={passwordData.newPassword}
                onChange={(e) => handlePasswordUpdate('newPassword', e.target.value)}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all pr-12"
              />
              <button
                onClick={() => setShowNewPassword(!showNewPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showNewPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
            <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
              <div className={`flex items-center ${passwordData.newPassword.length >= 8 ? 'text-green-600' : 'text-gray-500'}`}>
                <Check className="w-4 h-4 mr-1" /> At least 8 characters
              </div>
              <div className={`flex items-center ${/[A-Z]/.test(passwordData.newPassword) ? 'text-green-600' : 'text-gray-500'}`}>
                <Check className="w-4 h-4 mr-1" /> One uppercase letter
              </div>
              <div className={`flex items-center ${/[0-9]/.test(passwordData.newPassword) ? 'text-green-600' : 'text-gray-500'}`}>
                <Check className="w-4 h-4 mr-1" /> One number
              </div>
              <div className={`flex items-center ${/[^A-Za-z0-9]/.test(passwordData.newPassword) ? 'text-green-600' : 'text-gray-500'}`}>
                <Check className="w-4 h-4 mr-1" /> One special character
              </div>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={passwordData.confirmPassword}
                onChange={(e) => handlePasswordUpdate('confirmPassword', e.target.value)}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all pr-12"
              />
              <button
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>
          <button
            onClick={handleChangePassword}
            className="px-6 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Update Password
          </button>
        </div>
      </div>

      {/* Two-Factor Authentication */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
              <Shield className="w-5 h-5 mr-2" />
              Two-Factor Authentication
            </h3>
            <p className="text-gray-600">Add an extra layer of security to your account</p>
          </div>
          <div className="flex items-center">
            <button
              onClick={() => setTwoFactorEnabled(!twoFactorEnabled)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                twoFactorEnabled ? 'bg-green-500' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  twoFactorEnabled ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className="ml-3 text-sm font-medium text-gray-900">
              {twoFactorEnabled ? 'Enabled' : 'Disabled'}
            </span>
          </div>
        </div>
        {twoFactorEnabled && (
          <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Check className="w-5 h-5 text-green-600 mr-2" />
                <span className="text-green-800 font-medium">2FA is active</span>
              </div>
              <button className="text-blue-600 hover:text-blue-800 font-medium">
                Manage Devices
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Session Management */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Active Sessions</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center">
              <Globe className="w-5 h-5 text-gray-500 mr-3" />
              <div>
                <p className="font-medium">Chrome on Windows</p>
                <p className="text-sm text-gray-500">New York, USA • Last active: 2 hours ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded">Current</span>
              <button className="text-red-600 hover:text-red-800">
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center">
              <Smartphone className="w-5 h-5 text-gray-500 mr-3" />
              <div>
                <p className="font-medium">Safari on iPhone</p>
                <p className="text-sm text-gray-500">Los Angeles, USA • Last active: 1 week ago</p>
              </div>
            </div>
            <button className="text-red-600 hover:text-red-800">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
        <button className="mt-4 text-blue-600 hover:text-blue-800 font-medium">
          Log out from all other devices
        </button>
      </div>
    </div>
  );

  const renderNotificationsTab = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Notification Preferences</h2>
        <p className="text-gray-600">Choose how and when you want to be notified</p>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="space-y-6">
          {/* Email Notifications */}
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1 flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                Email Notifications
              </h3>
              <p className="text-gray-600">Receive updates via email</p>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => setEmailNotifications(!emailNotifications)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  emailNotifications ? 'bg-blue-500' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    emailNotifications ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Push Notifications */}
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1 flex items-center">
                <Bell className="w-5 h-5 mr-2" />
                Push Notifications
              </h3>
              <p className="text-gray-600">Receive browser and app notifications</p>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => setPushNotifications(!pushNotifications)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  pushNotifications ? 'bg-blue-500' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    pushNotifications ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Notification Types */}
          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Notification Types</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Appointment Reminders</p>
                  <p className="text-sm text-gray-500">Get notified before appointments</p>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" defaultChecked className="h-5 w-5 text-blue-600 rounded" />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">New Messages</p>
                  <p className="text-sm text-gray-500">When patients send new messages</p>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" defaultChecked className="h-5 w-5 text-blue-600 rounded" />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">System Updates</p>
                  <p className="text-sm text-gray-500">Important platform announcements</p>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" defaultChecked className="h-5 w-5 text-blue-600 rounded" />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Marketing Emails</p>
                  <p className="text-sm text-gray-500">Updates about new features</p>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" className="h-5 w-5 text-blue-600 rounded" />
                </div>
              </div>
            </div>
          </div>

          {/* Notification Schedule */}
          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              Notification Schedule
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Start Time</label>
                <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option>8:00 AM</option>
                  <option>9:00 AM</option>
                  <option>10:00 AM</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">End Time</label>
                <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option>6:00 PM</option>
                  <option>7:00 PM</option>
                  <option>8:00 PM</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPreferencesTab = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Preferences</h2>
        <p className="text-gray-600">Customize your experience</p>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="space-y-6">
          {/* Language */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
              <Globe className="w-5 h-5 mr-2" />
              Language
            </h3>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {languages.map(lang => (
                <option key={lang.value} value={lang.value}>{lang.label}</option>
              ))}
            </select>
          </div>

          {/* Timezone */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              Timezone
            </h3>
            <select
              value={timezone}
              onChange={(e) => setTimezone(e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {timezones.map(tz => (
                <option key={tz.value} value={tz.value}>{tz.label}</option>
              ))}
            </select>
          </div>

          {/* Date Format */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              Date Format
            </h3>
            <select
              value={dateFormat}
              onChange={(e) => setDateFormat(e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {dateFormats.map(format => (
                <option key={format.value} value={format.value}>{format.label}</option>
              ))}
            </select>
          </div>

          {/* Dark Mode */}
          <div className="flex items-center justify-between border-t border-gray-200 pt-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1 flex items-center">
                <Moon className="w-5 h-5 mr-2" />
                Dark Mode
              </h3>
              <p className="text-gray-600">Switch between light and dark themes</p>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  darkMode ? 'bg-gray-900' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    darkMode ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className="ml-3 text-sm font-medium text-gray-900">
                {darkMode ? 'On' : 'Off'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderBillingTab = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Billing & Subscription</h2>
        <p className="text-gray-600">Manage your subscription and payment methods</p>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="space-y-6">
          {/* Current Plan */}
          <div className="p-4 bg-linear-to-r from-blue-50 to-indigo-50 rounded-xl">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Current Plan</h3>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-gray-900">Professional Plan</p>
                <p className="text-gray-600">$99/month • Next billing date: Jan 15, 2024</p>
              </div>
              <button className="px-6 py-2.5 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors">
                Upgrade Plan
              </button>
            </div>
          </div>

          {/* Payment Methods */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Methods</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center">
                  <CreditCard className="w-6 h-6 text-gray-500 mr-3" />
                  <div>
                    <p className="font-medium">Visa ending in 4242</p>
                    <p className="text-sm text-gray-500">Expires 12/2025</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">Default</span>
                  <button className="text-gray-500 hover:text-gray-700">Edit</button>
                </div>
              </div>
              <button className="w-full p-4 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:text-gray-900 hover:border-gray-400 transition-colors">
                + Add New Payment Method
              </button>
            </div>
          </div>

          {/* Billing History */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Billing History</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div>
                  <p className="font-medium">Professional Plan</p>
                  <p className="text-sm text-gray-500">December 1, 2023</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">$99.00</p>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded">Paid</span>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div>
                  <p className="font-medium">Professional Plan</p>
                  <p className="text-sm text-gray-500">November 1, 2023</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">$99.00</p>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded">Paid</span>
                </div>
              </div>
            </div>
            <button className="mt-4 text-blue-600 hover:text-blue-800 font-medium">
              View All Invoices
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPrivacyTab = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Privacy & Data</h2>
        <p className="text-gray-600">Manage your data and privacy settings</p>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="space-y-6">
          {/* Data Export */}
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1 flex items-center">
                <Download className="w-5 h-5 mr-2" />
                Export Your Data
              </h3>
              <p className="text-gray-600">Download a copy of your personal data</p>
            </div>
            <button
              onClick={handleExportData}
              className="px-6 py-2.5 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors"
            >
              Export Data
            </button>
          </div>

          {/* Delete Account */}
          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
              <Trash2 className="w-5 h-5 mr-2" />
              Delete Account
            </h3>
            <p className="text-gray-600 mb-4">
              Once you delete your account, there is no going back. Please be certain.
            </p>
            <button
              onClick={handleDeleteAccount}
              className="px-6 py-2.5 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors"
            >
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return renderProfileTab();
      case 'security':
        return renderSecurityTab();
      case 'notifications':
        return renderNotificationsTab();
      case 'billing':
        return renderBillingTab();
      case 'preferences':
        return renderPreferencesTab();
      case 'privacy':
        return renderPrivacyTab();
      default:
        return renderProfileTab();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-600">Manage your account settings and preferences</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:w-64">
            <div className="bg-white rounded-xl border border-gray-200 p-4">
              <nav className="space-y-1">
                {tabs.map(tab => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                        activeTab === tab.id
                          ? 'bg-blue-50 text-blue-700'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <Icon className="w-5 h-5 mr-3" />
                      {tab.label}
                    </button>
                  );
                })}
              </nav>

              {/* Logout Button */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <button className="w-full flex items-center px-4 py-3 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                  <LogOut className="w-5 h-5 mr-3" />
                  Logout
                </button>
              </div>
            </div>

            {/* Help Section */}
            <div className="mt-4 bg-white rounded-xl border border-gray-200 p-4">
              <div className="flex items-center mb-3">
                <HelpCircle className="w-5 h-5 text-gray-500 mr-2" />
                <span className="font-medium text-gray-900">Need Help?</span>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Check our documentation or contact support
              </p>
              <button className="w-full px-4 py-2 text-sm text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                Contact Support
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;