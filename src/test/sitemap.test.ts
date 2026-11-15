import { describe, expect, it } from 'vitest';
import { sitemapXML } from '../lib/sitemap';

describe('public sitemap', () => {
  it('uses the public domain and omits invented modification dates', () => {
    const xml = sitemapXML('https://lalkitab.ankdarppan.in', [{ path: '/' }, { path: '/contact.html' }]);
    expect(xml).toContain('<loc>https://lalkitab.ankdarppan.in/contact.html</loc>');
    expect(xml).not.toContain('<lastmod>');
  });
  it('rejects credential-bearing and external paths', () => {
    expect(() => sitemapXML('https://lalkitab.ankdarppan.in', [{ path: '/checkout/confirmation?token=private' }])).toThrow('Invalid sitemap path');
    expect(() => sitemapXML('https://lalkitab.ankdarppan.in', [{ path: '//other.example' }])).toThrow('Invalid sitemap path');
  });
});
