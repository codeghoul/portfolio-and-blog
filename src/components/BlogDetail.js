import React from 'react'
import Image from 'next/image'
import Link from 'next/link' // Import Link from Next.js
import { Highlight, themes } from 'prism-react-renderer'
import Markdown from 'react-markdown'

const BlogDetail = ({ blog }) => {
  return (
    <article className='flex gap-2 flex-col py-8 px-10'>
      <div className=''>
        <Markdown
          className='flex flex-col gap-4 font-body text-base'
          components={{
            img: MarkdownImage,
            h1: MarkdownH1,
            h2: MarkdownH2,
            h3: MarkdownH3,
            p: MarkdownParagraph,
            a: MarkdownLink,
            ol: MarkdownOrderedList,
            ul: MarkdownUnorderedList,
            blockquote: MarkdownBlockquote,
            code: MarkdownCode,
          }}
        >
          {blog.markdown}
        </Markdown>
      </div>
    </article>
  )
}

const MarkdownImage = ({ alt, src }) => {
  return (
    <div
      className='mx-auto max-w-xl aspect-video bg-gray-100 relative'
      style={{ width: '100%', height: '100%' }}
    >
      <Image alt={alt} src={src} layout='fill' objectFit='contain' />
    </div>
  )
}

const MarkdownH1 = ({ children }) => {
  return <h1 className='text-3xl font-display'>{children}</h1>
}

const MarkdownH2 = ({ children }) => {
  return <h2 className='text-2xl font-display'>{children}</h2>
}

const MarkdownH3 = ({ children }) => {
  return <h3 className='text-2xl font-display'>{children}</h3>
}

const MarkdownParagraph = ({ children }) => {
  return <p className='text-sm'>{children}</p>
}

const MarkdownLink = ({ href, children }) => {
  // Open external links in a new tab
  const isExternal = /^(https?:|mailto:|tel:)/.test(href)
  const linkClassName = 'border-b border-dotted border-neutral-100'

  if (isExternal) {
    return (
      <a
        className={linkClassName}
        href={href}
        target='_blank'
        rel='noopener noreferrer'
      >
        {children}
      </a>
    )
  }

  // For internal links, use Next.js Link component
  return (
    <Link href={href}>
      <a className={linkClassName}>{children}</a>
    </Link>
  )
}

const MarkdownOrderedList = ({ children }) => {
  return <ol className='list-decimal pl-5 text-sm'>{children}</ol>
}

const MarkdownUnorderedList = ({ children }) => {
  return <ul className='list-disc pl-5 text-sm'>{children}</ul>
}

const MarkdownBlockquote = ({ children }) => {
  return (
    <blockquote className='mx-auto italic text-gray-200'>{children}</blockquote>
  )
}

const MarkdownCode = ({ children, className }) => {
  // Extract the language from the className, e.g., "language-jsx"
  const language = className ? className.replace(/language-/, '') : ''

  return (
    <Highlight
      code={children.trim()}
      language={language}
      theme={themes.oneDark}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={`${className} p-4 bg-gray-900 text-white rounded-md`}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}

export default BlogDetail
