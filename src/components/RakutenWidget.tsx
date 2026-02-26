'use client'

import { useEffect } from 'react'

export function RakutenWidget() {
  useEffect(() => {
    const w = window as any
    w.rakuten_affiliateId = '0ea62065.34400275.0ea62066.204f04c0'
    w.rakuten_items = 'ranking'
    w.rakuten_genreId = '0'
    w.rakuten_recommend = 'on'
    w.rakuten_design = 'slide'
    w.rakuten_size = '120x240'
    w.rakuten_target = '_blank'
    w.rakuten_border = 'on'
    w.rakuten_auto_mode = 'on'
    w.rakuten_adNetworkId = 'a8Net'
    w.rakuten_adNetworkUrl =
      'https%3A%2F%2Frpx.a8.net%2Fsvt%2Fejp%3Fa8mat%3D4AXL45%2BFKUCMQ%2B2HOM%2BBS629%26rakuten%3Dy%26a8ejpredirect%3D'
    w.rakuten_pointbackId = 'a26022783922_4AXL45_FKUCMQ_2HOM_BS629'
    w.rakuten_mediaId = '20011816'

    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = '//xml.affiliate.rakuten.co.jp/widget/js/rakuten_widget.js'

    const container = document.getElementById('rakuten-widget-mount')
    container?.appendChild(script)

    return () => {
      if (container?.contains(script)) container.removeChild(script)
    }
  }, [])

  return (
    <div className="bg-white rounded-xl border border-gray-100 p-4">
      <p className="text-xs font-semibold text-gray-500 mb-3">楽天 人気ランキング</p>
      <div id="rakuten-widget-mount" className="flex justify-center" />
      {/* A8 tracking pixel */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://www13.a8.net/0.gif?a8mat=4AXL45+FKUCMQ+2HOM+BS629"
        alt=""
        width={1}
        height={1}
        className="absolute"
      />
    </div>
  )
}
