---
# PRODUCT ENTRY TEMPLATE
# ─────────────────────────────────────────────────────────────────────────────
# HOW TO USE
# 1. Copy this entire folder to: src/content/products/<your-slug>/
# 2. Fill in the fields below
# 3. Create subfolders in variants/<SKU>/ for each variation:
#    - variants/<SKU>/thumbnail.jpg  (Product photo for this SKU)
#    - variants/<SKU>/design.jpg     (Print / pattern graphic for picker)
#    - variants/<SKU>/extra-1.jpg... (Optional extra angle/lifestyle photos)
# 4. Run: npm run build
# ─────────────────────────────────────────────────────────────────────────────

sku: CP-XX-001                    # ← REQUIRED. Pattern: CP-{CATEGORY}-{NUMBER}
name: Product Name                # ← REQUIRED. English product name
name_tr: Ürün Adı                 # ← REQUIRED. Turkish product name
tagline: One-line pitch.          # Optional. English tagline
tagline_tr: Tek satırlık tanıtım. # Optional. Turkish tagline
description: >-
  A longer English description of the product. Two to three sentences
  covering what it is and why it exists.
description_tr: >-
  Ürünün daha uzun Türkçe açıklaması. İki ila üç cümle;
  ne olduğunu ve neden var olduğunu kapsayacak şekilde.

status: coming-soon               # available | coming-soon | archived
order: 100                        # Lower number = appears first in listings

# Categories — reference IDs from src/content/categories/*.yaml
categories:
  - cats
  # - dogs

# Fallback / umbrella hero image (in the product folder)
images:
  - ./hero.jpg

# Price — optional, for when webshop goes live
# price:
#   amount: 29.90
#   currency: EUR

# Sizes — enter dimensions as numbers in cm with an integer ID
sizes:
  - { id: 1, w: 45, l: 60 }
  - { id: 2, w: 60, l: 90 }

materials:
  - Material One
  - Material Two

tags:
  - cat
  - home

private_label_ready: true

# Variants — define SKUs and link to size IDs
# Images are automatically linked from variants/<SKU>/ folder
variants:
  - sku: CP-XX-001-4560-01
    size_id: 1
    status: available
  - sku: CP-XX-001-4560-02
    size_id: 1
    status: available
  - sku: CP-XX-001-6090-01
    size_id: 2
    status: available
---

<div lang="en">

## What it's for

Describe the problem this product solves. One to three sentences.

## What it is

Describe the product itself — materials, construction, how it works.

## Details

- Key feature one.
- Key feature two.
- Key feature three.

## For retailers

Available for wholesale orders and private-label projects. See the
[Wholesale](/wholesale) or [Private Label](/private-label) pages.

</div>
<div lang="tr">

## Ne işe yarar

Bu ürünün çözdüğü sorunu açıklayın. Bir ila üç cümle.

## Ürün

Ürünün kendisini açıklayın — malzemeler, yapı, nasıl çalışır.

## Detaylar

- Birinci önemli özellik.
- İkinci önemli özellik.
- Üçüncü önemli özellik.

## Perakendeciler için

Toptan siparişler ve özel marka projeleri için mevcut.
[Toptan](/wholesale) veya [Özel Marka](/private-label) sayfalarını inceleyin.

</div>
