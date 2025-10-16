#!/usr/bin/env python3
"""
Script untuk mengganti semua warna menjadi grayscale di semua file TypeScript
"""
import os
import re

# Mapping warna ke grayscale
color_replacements = {
    # Border colors
    'border-blue-200': 'border-gray-200',
    'border-blue-300': 'border-gray-300',
    'border-blue-400': 'border-gray-400',
    'border-blue-500': 'border-gray-700',
    'border-green-200': 'border-gray-200',
    'border-green-300': 'border-gray-300',
    'border-red-200': 'border-gray-200',
    'border-red-300': 'border-gray-300',
    'border-yellow-200': 'border-gray-200',
    'border-yellow-300': 'border-gray-300',
    'border-purple-100': 'border-gray-100',
    'border-purple-200': 'border-gray-200',
    'border-purple-300': 'border-gray-300',
    'border-indigo-200': 'border-gray-200',
    'border-indigo-300': 'border-gray-300',
    'border-indigo-500': 'border-gray-700',
    
    # Text colors
    'text-blue-600': 'text-gray-700',
    'text-blue-700': 'text-gray-800',
    'text-green-600': 'text-gray-700',
    'text-green-700': 'text-gray-800',
    'text-red-600': 'text-gray-700',
    'text-red-700': 'text-gray-800',
    'text-yellow-600': 'text-gray-700',
    'text-purple-600': 'text-gray-700',
    'text-purple-700': 'text-gray-800',
    'text-indigo-600': 'text-gray-700',
    
    # Background colors
    'bg-blue-50': 'bg-gray-50',
    'bg-blue-100': 'bg-gray-100',
    'bg-blue-500': 'bg-gray-700',
    'bg-green-50': 'bg-gray-50',
    'bg-green-100': 'bg-gray-100',
    'bg-green-500': 'bg-gray-700',
    'bg-red-50': 'bg-gray-50',
    'bg-red-100': 'bg-gray-100',
    'bg-red-500': 'bg-gray-700',
    'bg-yellow-50': 'bg-gray-50',
    'bg-yellow-100': 'bg-gray-100',
    'bg-purple-50': 'bg-gray-50',
    'bg-purple-100': 'bg-gray-100',
    'bg-indigo-50': 'bg-gray-50',
    'bg-indigo-100': 'bg-gray-100',
    
    # Hover states
    'hover:bg-blue-50': 'hover:bg-gray-100',
    'hover:bg-blue-100': 'hover:bg-gray-100',
    'hover:bg-green-50': 'hover:bg-gray-100',
    'hover:bg-red-50': 'hover:bg-gray-100',
    'hover:bg-yellow-50': 'hover:bg-gray-100',
    'hover:bg-purple-50': 'hover:bg-gray-100',
    'hover:bg-purple-100': 'hover:bg-gray-100',
    'hover:bg-indigo-50': 'hover:bg-gray-100',
    'hover:border-blue-300': 'hover:border-gray-400',
    'hover:border-blue-400': 'hover:border-gray-400',
    'hover:border-indigo-300': 'hover:border-gray-400',
    'hover:border-purple-300': 'hover:border-gray-400',
    'hover:text-purple-700': 'hover:text-gray-900',
    
    # Focus states
    'focus:border-blue-400': 'focus:border-gray-400',
    'focus:border-purple-400': 'focus:border-gray-400',
    'focus:border-indigo-400': 'focus:border-gray-400',
    
    # Gradients - dari warna ke gray
    'from-blue-400 to-purple-500': 'from-gray-600 to-gray-900',
    'from-blue-600 to-purple-600': 'from-gray-700 to-gray-900',
    'from-blue-50 to-purple-50': 'from-gray-50 to-gray-100',
    'from-purple-50 to-blue-50': 'from-gray-50 to-gray-100',
    'from-purple-50 to-pink-50': 'from-gray-50 to-gray-100',
    'from-green-50 to-emerald-50': 'from-gray-50 to-gray-100',
    'from-blue-400 to-blue-600': 'from-gray-600 to-gray-800',
    'from-blue-500 to-blue-600': 'from-gray-700 to-gray-900',
    'from-blue-600 to-blue-700': 'from-gray-800 to-black',
    'from-purple-400 to-purple-600': 'from-gray-600 to-gray-800',
    'from-green-400 to-emerald-500': 'from-gray-600 to-gray-800',
    'from-indigo-500 to-indigo-600': 'from-gray-700 to-gray-900',
    'from-indigo-600 to-indigo-700': 'from-gray-800 to-black',
}

def fix_colors_in_file(filepath):
    """Mengganti semua warna dalam file"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Lakukan replacement
        for old_color, new_color in color_replacements.items():
            content = content.replace(old_color, new_color)
        
        # Jika ada perubahan, tulis kembali
        if content != original_content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        return False
    except Exception as e:
        print(f"Error processing {filepath}: {e}")
        return False

def main():
    """Main function"""
    pages_dir = './pages'
    components_dir = './components'
    
    modified_files = []
    
    # Process all .tsx files
    for root, dirs, files in os.walk(pages_dir):
        for file in files:
            if file.endswith('.tsx'):
                filepath = os.path.join(root, file)
                if fix_colors_in_file(filepath):
                    modified_files.append(filepath)
                    print(f"✓ Fixed: {filepath}")
    
    for root, dirs, files in os.walk(components_dir):
        for file in files:
            if file.endswith('.tsx'):
                filepath = os.path.join(root, file)
                if fix_colors_in_file(filepath):
                    modified_files.append(filepath)
                    print(f"✓ Fixed: {filepath}")
    
    print(f"\n✅ Total files modified: {len(modified_files)}")
    for file in modified_files:
        print(f"   - {file}")

if __name__ == '__main__':
    main()
