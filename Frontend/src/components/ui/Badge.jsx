import React from 'react';

/**
 * Badge Component - A versatile UI component for labels, statuses, and tags
 * 
 * @param {string} variant - 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'dark' | 'light' | 'outline' | 'gradient'
 * @param {string} size - 'xs' | 'sm' | 'md' | 'lg' | 'xl'
 * @param {string} className - Additional CSS classes
 * @param {boolean} rounded - Makes badge pill-shaped
 * @param {string|node} icon - Icon element or emoji
 * @param {string} iconPosition - 'left' | 'right'
 * @param {boolean} removable - Shows remove button
 * @param {function} onRemove - Callback when remove button is clicked
 * @param {boolean} pulse - Adds pulse animation
 * @param {boolean} animated - Adds hover animation
 * @param {string} as - HTML element to render as ('span' | 'div' | 'button')
 * @param {children} - Badge content
 */
const Badge = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  rounded = false,
  icon = null,
  iconPosition = 'left',
  removable = false,
  onRemove = null,
  pulse = false,
  animated = false,
  as = 'span',
  onClick = null,
  ...props
}) => {
  // Variant styles
  const variants = {
    primary: {
      bg: 'bg-primary-100 dark:bg-primary-900/30',
      text: 'text-primary-800 dark:text-primary-300',
      border: 'border-primary-200 dark:border-primary-700'
    },
    secondary: {
      bg: 'bg-gray-100 dark:bg-gray-700',
      text: 'text-gray-800 dark:text-gray-200',
      border: 'border-gray-200 dark:border-gray-600'
    },
    success: {
      bg: 'bg-green-100 dark:bg-green-900/30',
      text: 'text-green-800 dark:text-green-300',
      border: 'border-green-200 dark:border-green-700'
    },
    warning: {
      bg: 'bg-yellow-100 dark:bg-yellow-900/30',
      text: 'text-yellow-800 dark:text-yellow-300',
      border: 'border-yellow-200 dark:border-yellow-700'
    },
    danger: {
      bg: 'bg-red-100 dark:bg-red-900/30',
      text: 'text-red-800 dark:text-red-300',
      border: 'border-red-200 dark:border-red-700'
    },
    info: {
      bg: 'bg-blue-100 dark:bg-blue-900/30',
      text: 'text-blue-800 dark:text-blue-300',
      border: 'border-blue-200 dark:border-blue-700'
    },
    dark: {
      bg: 'bg-gray-800 dark:bg-gray-600',
      text: 'text-white dark:text-gray-100',
      border: 'border-gray-700 dark:border-gray-500'
    },
    light: {
      bg: 'bg-gray-50 dark:bg-gray-800',
      text: 'text-gray-700 dark:text-gray-300',
      border: 'border-gray-200 dark:border-gray-700'
    },
    outline: {
      bg: 'bg-transparent',
      text: 'text-primary-600 dark:text-primary-400',
      border: 'border-2 border-primary-600 dark:border-primary-400'
    },
    gradient: {
      bg: 'bg-gradient-to-r from-primary-500 to-primary-600 dark:from-primary-400 dark:to-primary-500',
      text: 'text-white',
      border: 'border-transparent'
    }
  };

  // Size styles
  const sizes = {
    xs: {
      padding: 'px-1.5 py-0.5',
      fontSize: 'text-[10px]',
      iconSize: 'w-3 h-3'
    },
    sm: {
      padding: 'px-2 py-0.5',
      fontSize: 'text-xs',
      iconSize: 'w-3.5 h-3.5'
    },
    md: {
      padding: 'px-2.5 py-1',
      fontSize: 'text-sm',
      iconSize: 'w-4 h-4'
    },
    lg: {
      padding: 'px-3 py-1.5',
      fontSize: 'text-base',
      iconSize: 'w-5 h-5'
    },
    xl: {
      padding: 'px-4 py-2',
      fontSize: 'text-lg',
      iconSize: 'w-6 h-6'
    }
  };

  // Get variant and size styles
  const variantStyle = variants[variant] || variants.primary;
  const sizeStyle = sizes[size] || sizes.md;

  // Base classes
  const baseClasses = `
    inline-flex items-center gap-1.5
    font-medium
    ${sizeStyle.fontSize}
    ${sizeStyle.padding}
    ${variantStyle.bg}
    ${variantStyle.text}
    ${variantStyle.border}
    border
    transition-all duration-200
    ${rounded ? 'rounded-full' : 'rounded-md'}
    ${animated ? 'hover:scale-105 hover:shadow-md cursor-pointer' : ''}
    ${pulse ? 'animate-pulse' : ''}
    ${onClick ? 'cursor-pointer hover:shadow-md hover:scale-105' : ''}
    ${className}
  `;

  // Remove button styles
  const removeButtonClasses = `
    ml-0.5
    text-current
    opacity-60
    hover:opacity-100
    hover:scale-110
    transition-all
    duration-200
    cursor-pointer
    focus:outline-none
    focus:ring-2
    focus:ring-offset-2
    focus:ring-primary-500
    rounded-full
    p-0.5
  `;

  // Render badge
  const Component = as;

  return (
    <Component 
      className={baseClasses} 
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? '0' : undefined}
      {...props}
    >
      {/* Left Icon */}
      {icon && iconPosition === 'left' && (
        <span className={`${sizeStyle.iconSize} flex-shrink-0`}>
          {icon}
        </span>
      )}

      {/* Content */}
      <span className="truncate">{children}</span>

      {/* Right Icon */}
      {icon && iconPosition === 'right' && (
        <span className={`${sizeStyle.iconSize} flex-shrink-0`}>
          {icon}
        </span>
      )}

      {/* Remove Button */}
      {removable && onRemove && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}
          className={removeButtonClasses}
          aria-label="Remove badge"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`${sizeStyle.iconSize} flex-shrink-0`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}
    </Component>
  );
};

export default Badge;