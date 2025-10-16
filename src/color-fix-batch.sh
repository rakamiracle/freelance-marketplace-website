#!/bin/bash

# Batch color replacement script for monochrome theme

# Function to replace colors in file
replace_colors() {
    local file=$1
    
    # Border colors
    sed -i 's/border-blue-200/border-gray-200/g' "$file"
    sed -i 's/border-blue-300/border-gray-300/g' "$file"
    sed -i 's/border-blue-400/border-gray-400/g' "$file"
    sed -i 's/border-blue-500/border-gray-700/g' "$file"
    sed -i 's/border-green-500/border-gray-700/g' "$file"
    sed -i 's/border-purple-200/border-gray-200/g' "$file"
    sed -i 's/border-indigo-300/border-gray-300/g' "$file"
    sed -i 's/border-indigo-500/border-gray-700/g' "$file"
    
    # Text colors
    sed -i 's/text-blue-600/text-gray-700/g' "$file"
    sed -i 's/text-indigo-600/text-gray-700/g' "$file"
    sed -i 's/text-purple-600/text-gray-700/g' "$file"
    
    # Background colors
    sed -i 's/bg-blue-50/bg-gray-50/g' "$file"
    sed -i 's/bg-blue-100/bg-gray-100/g' "$file"
    sed -i 's/bg-indigo-50/bg-gray-50/g' "$file"
    sed -i 's/bg-purple-50/bg-gray-50/g' "$file"
    sed -i 's/bg-green-500/bg-gray-700/g' "$file"
    
    # Hover states
    sed -i 's/hover:bg-blue-50/hover:bg-gray-100/g' "$file"
    sed -i 's/hover:bg-purple-50/hover:bg-gray-100/g' "$file"
    sed -i 's/hover:border-blue-300/hover:border-gray-400/g' "$file"
    sed -i 's/hover:border-indigo-300/hover:border-gray-400/g' "$file"
    
    # Focus states
    sed -i 's/focus:border-purple-400/focus:border-gray-400/g' "$file"
    
    # Gradients
    sed -i 's/from-blue-500 to-blue-600/from-gray-700 to-gray-900/g' "$file"
    sed -i 's/from-blue-600 to-blue-700/from-gray-800 to-black/g' "$file"
    sed -i 's/from-blue-50 to-blue-100/from-gray-50 to-gray-100/g' "$file"
    sed -i 's/from-indigo-500 bg-indigo-50/from-gray-700 bg-gray-100/g' "$file"
    sed -i 's/from-blue-500 bg-blue-50/from-gray-700 bg-gray-100/g' "$file"
    
    echo "✓ Fixed: $file"
}

# Process all TypeScript files
find pages -name "*.tsx" -type f | while read file; do
    replace_colors "$file"
done

echo "✅ All files processed!"
