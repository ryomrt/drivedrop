// ==========================================
// ⚙️ イベント設定（開催ごとにここだけ書き換える）
// ==========================================
const CONFIG = {
  // ① イベント名（画面のタイトルになります）
  EVENT_NAME: "春のライブイベント", 

  // ② 写真を保存するGoogleドライブのフォルダID
  // フォルダIDは、フォルダのURLの「folders/」の後ろの部分です。
  // 例：https://drive.google.com/drive/folders/xxxxxx → IDは "xxxxxx"
  FOLDER_ID: "xxxxxx",

  // ==========================================
  // 📝 画面のテキスト設定（すべてここで変更可能！）
  // ==========================================
  UI_TEXT: {
    // 画面上部
    DESCRIPTION: "最高の瞬間をシェアしよう！<br>複数枚まとめて選べます（1度に30枚までアップできます）",
    
    // 写真選択エリア
    DROPZONE_MAIN: "ここをタップして写真を選択",
    DROPZONE_SUB: "または ここにドラッグ＆ドロップ",

    // 画質選択オプション
    QUALITY_COMPRESS_TITLE: "🚀 サクサク",
    QUALITY_COMPRESS_NOTE: "見やすいサイズに自動調整（おすすめ）",
    QUALITY_ORIGINAL_TITLE: "💎 高画質",
    QUALITY_ORIGINAL_NOTE: "元のサイズのまま送信（少し時間がかかります）",

    // ボタン類
    BTN_UPLOAD: "アップロード開始",
    BTN_RELOAD: "🔄 更新",
    BTN_GALLERY: "全画面で写真一覧を見る ↗️",

    // セクションのタイトル
    SECTION_LOCAL: "✨ 今あなたが送った写真",
    SECTION_GLOBAL: "👀 みんなの写真",

    // 送信前の確認ポップアップ
    MODAL_TITLE: "ちょっと待ってね！👀",
    MODAL_WARNING: "✅ 送信した写真は後から<b>自分で消すことができません。</b>間違えちゃった時は、運営メンバーにこっそり教えてね！<br><br>✅ みんなが笑顔になれるよう、誰かが悲しむような写真や、<b>NGな写真</b>はアップしないようにお約束をお願いします🙏",
    MODAL_BTN_CANCEL: "やめとく",
    MODAL_BTN_SUBMIT: "バッチリ！送信🚀",

    // システムメッセージ
    MSG_NO_FILE: "⚠️ 写真を選んでね！",
    MSG_SELECTED: "枚の写真が選択されています✨", 
    MSG_PREPARING: "準備中...⏳",
    MSG_UPLOADING: "送信中...🚀",
    MSG_SUCCESS: "🎉 送信完了！シェアありがとう✨",
    MSG_RELOAD: "⏳ 更新中...",
    BTN_UPLOAD_AGAIN: "もっと写真を送る",

    // コードシェア機能のテキスト
    BTN_SHARE_QR: "📲 友達に教える (QRコード)",
    MODAL_QR_TITLE: "友達を招待する",
    MODAL_QR_NOTE: "このQRコードをカメラで読み取ってもらってね！",
    MODAL_BTN_CLOSE: "閉じる",

    // アップロード制限の設定（タイムアウト対策）
    MAX_FILES: 30, // 一度に選択できる最大枚数
    MSG_LIMIT: "⚠️ 1回で送れるのは30枚までです！超えた分はキャンセルしました🙏",

    // ページ最下部のお問い合わせ先（HTMLタグが使えます）
    CONTACT_MESSAGE: "お困りのことがあれば 運営メンバー <a href='mailto:[EMAIL_ADDRESS]'>[EMAIL_ADDRESS]</a> まで！"
  }
};