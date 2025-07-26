import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import { StaticButton } from '@/components/ui/Button'
import { Glass } from '@/components/ui/Glass'

interface WorkData {
  id: string
  title: string
  description: string
  longDescription: string
  category: string
  tags: string[]
  year: string
  status: 'completed' | 'in-progress' | 'concept'
  technologies: string[]
  links?: {
    demo?: string
    github?: string
    blog?: string
    presentation?: string
  }
  images?: string[]
  achievements?: string[]
  teamSize?: number
  duration?: string
}

// プロジェクトデータ（20件完了！）
const projectsData: Record<string, WorkData> = {
  'biomod-2015': {
    id: 'biomod-2015',
    title: 'BIOMOD 2015 - DNA分子ロボット設計',
    description: 'ハーバード大学主催の国際生体分子設計コンテストで世界1位を獲得',
    longDescription: `ハーバード大学で開催されたDNAを用いた面白い生体分子を創るコンテスト「BIOMOD」に参加し、TeamSendaiとして統合優勝（the grand prize）を獲得しました。

DNAを用いた合成分子ロボットの設計・開発を行い、分子レベルでの動作機構を実現。プロジェクトではWebページ作成、シミュレーション、実験データ解析などを担当しました。

このプロジェクトを通じて、分子生物学とナノテクノロジーの融合分野での研究経験を積み、国際的な研究チームでの協働を学びました。`,
    category: 'Research',
    tags: ['DNA', 'Molecular Biology', 'Nanotechnology', 'Research', 'Competition'],
    year: '2015',
    status: 'completed',
    technologies: ['DNA Design', 'Molecular Simulation', 'Web Development', 'Data Analysis'],
    links: {
      blog: '/blog/3'
    },
    achievements: [
      '国際生体分子設計コンテスト（BIOMOD 2015）統合優勝',
      'ハーバード大学での研究発表',
      '分子ロボット設計の成功'
    ],
    teamSize: 6,
    duration: '6ヶ月'
  },
  'biomod-2016': {
    id: 'biomod-2016',
    title: 'BIOMOD 2016 - Webページ担当',
    description: 'BIOMOD 2016コンテストでWebページ制作を担当。前年の優勝チームとして技術継承とWeb開発を主導。',
    longDescription: `BIOMOD 2015で統合優勝した経験を活かし、2016年は主にWebページ制作とプロジェクト広報を担当しました。

HTML5、CSS3、JavaScriptを駆使したインタラクティブなWebサイトを構築し、研究内容の可視化とプロジェクトの魅力的なプレゼンテーションを実現しました。アニメーションやインフォグラフィックスを多用し、複雑な分子生物学的プロセスを分かりやすく説明しました。

チームの技術的な継承と、新メンバーへの指導も担当し、プロジェクトマネジメントの経験も積みました。`,
    category: 'Research',
    tags: ['BIOMOD', 'Web Development', 'HTML5', 'CSS3', 'JavaScript'],
    year: '2016',
    status: 'completed',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'SVG Animation', 'Responsive Design'],
    achievements: [
      'BIOMOD 2016 Webページ制作完了',
      'インタラクティブな研究紹介サイト',
      'チーム技術継承とメンタリング'
    ],
    teamSize: 8,
    duration: '6ヶ月'
  },
  'nasa-hackathon': {
    id: 'nasa-hackathon',
    title: 'NASA Space Apps Challenge - AI災害予測システム',
    description: 'NASA主催ハッカソンで深層学習を用いたハザードマップ自動生成AIを開発。東京予選優勝。',
    longDescription: `NASA主催の宇宙データを活用するハッカソン「NASA Space Apps Challenge」に参加し、深層学習技術を用いてハザードマップを自動生成するAIシステムを開発しました。

衛星データと機械学習を組み合わせることで、災害リスクを可視化し、防災対策の効率化を目指したプロジェクトです。東京予選で優勝を獲得しました。

このプロジェクトを通じて、宇宙データの活用方法と深層学習の実用的な応用について深く学ぶことができました。`,
    category: 'AI/ML',
    tags: ['NASA', 'Deep Learning', 'Disaster Prevention', 'Geospatial', 'Hackathon'],
    year: '2018',
    status: 'completed',
    technologies: ['Python', 'TensorFlow', 'Geospatial Analysis', 'Satellite Data'],
    achievements: [
      'NASA Space Apps Challenge 東京予選優勝',
      'AI災害予測システムの開発',
      '衛星データ活用の実証'
    ],
    teamSize: 4,
    duration: '48時間'
  },
  'unity-game': {
    id: 'unity-game',
    title: 'Unity Fall Guys風アクションゲーム',
    description: 'Photonでネットワーク同期された5ステージのアクションゲーム。ゼルダの祠世界のような神秘的な世界観を実現。',
    longDescription: `Fall GuysにインスパイアされたマルチプレイヤーアクションゲームをUnityで開発しました。

合計5つのステージがあり、各ステージの奥にあるワープゲートを全て潜ることでクリアとなります。Photonを使用したネットワーク同期により、他プレイヤーとの同時プレイが可能です。

ゼルダの祠世界のような神秘的かつ無機質な世界観を目指し、衝突判定と移動処理を重点的に最適化しました。物理演算とネットワーク同期の両立が技術的なチャレンジでした。`,
    category: 'Game Development',
    tags: ['Unity', 'C#', 'Photon', 'Multiplayer', 'Game Design'],
    year: '2020',
    status: 'completed',
    technologies: ['Unity', 'C#', 'Photon PUN2', 'Physics', '3D Modeling'],
    achievements: [
      'マルチプレイヤーゲームの完成',
      'ネットワーク同期システムの実装',
      '5つの独創的なステージデザイン'
    ],
    teamSize: 1,
    duration: '3ヶ月'
  },
  'ball-rolling-game': {
    id: 'ball-rolling-game',
    title: 'ボール転がしゲーム',
    description: 'Unity物理エンジンを活用した3Dボール転がしゲーム。重力とモーメンタムを活用したパズル要素とスピード感を両立。',
    longDescription: `Unity3Dの物理エンジンを最大限活用したボール転がしゲームを開発しました。

プレイヤーは球体を操作し、様々な障害物や仕掛けが配置されたステージを重力とモーメンタムを利用してクリアしていきます。シンプルな操作性ながら、物理演算による自然な動きとパズル要素を組み合わせることで、奥深いゲームプレイを実現しました。

レベルデザインでは、スピード感のあるコースから慎重な操作が求められる精密コースまで、多様なプレイ体験を提供します。`,
    category: 'Game Development',
    tags: ['Unity', 'Physics', '3D', 'Game Design', 'Puzzle'],
    year: '2019',
    status: 'completed',
    technologies: ['Unity', 'C#', 'Physics Engine', '3D Modeling', 'Level Design'],
    achievements: [
      '物理演算ベースのゲームプレイ実現',
      '多様なレベルデザインの実装',
      '直感的な操作システムの開発'
    ],
    teamSize: 2,
    duration: '1ヶ月'
  },
  'rocket-project': {
    id: 'rocket-project',
    title: 'ロケット製作プロジェクト',
    description: '大学のロケット製作プロジェクトに参加。固体燃料ロケットの設計・製作・打ち上げ実験を実施。',
    longDescription: `大学の航空宇宙工学関連プロジェクトとして、固体燃料ロケットの設計・製作・打ち上げ実験に参加しました。

ロケット本体の設計、燃料の調合、推進システムの計算、安全システムの実装など、ロケット工学の基礎から実践まで幅広く学習しました。CADソフトウェアを用いた3D設計、流体力学シミュレーション、材料工学の知識も活用しました。

最終的に高度100m以上の打ち上げに成功し、ロケット工学とプロジェクトマネジメントの実践的な経験を積むことができました。`,
    category: 'Engineering',
    tags: ['Rocket', 'Engineering', 'CAD', 'Physics', 'Project Management'],
    year: '2016',
    status: 'completed',
    technologies: ['CAD Design', 'Fluid Dynamics', 'Materials Engineering', 'Safety Systems'],
    achievements: [
      'ロケット打ち上げ成功（高度100m+）',
      '固体燃料ロケット設計・製作',
      'チームプロジェクト完遂'
    ],
    teamSize: 6,
    duration: '8ヶ月'
  },
  'milking-game': {
    id: 'milking-game',
    title: '乳しぼりゲーム（iCAN\'14）',
    description: 'センサー技術を活用した体感型乳しぼりゲーム。Arduino+圧力センサーでリアルな酪農体験を再現。',
    longDescription: `国際ナノ・マイクロアプリケーションコンテスト（iCAN'14）で発表した、センサー技術を活用した体感型乳しぼりゲームです。

Arduinoと圧力センサーを組み合わせ、実際の乳しぼり動作を忠実に再現するハードウェアを製作しました。プレイヤーのしぼり方（力の強さ、リズム、持続時間）によって画面上の乳量や品質が変化し、楽しみながら酪農業への理解を深められるゲームです。

都市部の子供たちに農業体験の機会を提供することを目的とし、教育効果とエンターテイメント性を両立したシステムを構築しました。`,
    category: 'IoT',
    tags: ['iCAN', 'Arduino', 'Sensor', 'Educational Game', 'Agriculture'],
    year: '2014',
    status: 'completed',
    technologies: ['Arduino', 'Pressure Sensor', 'Game Development', 'Hardware Integration'],
    achievements: [
      'iCAN\'14コンテスト参加',
      '体感型ゲームシステムの開発',
      '教育効果とエンターテイメントの両立'
    ],
    teamSize: 4,
    duration: '3ヶ月'
  },
  // === 新規追加プロジェクト（続き） ===
  'react-movie-search': {
    id: 'react-movie-search',
    title: 'React映画検索サイト',
    description: 'The Movie Database (TMDb) APIを活用したReact製の映画検索・詳細閲覧サイト。レスポンシブデザインとスムーズなアニメーション実装。',
    longDescription: `The Movie Database (TMDb) APIを活用して、映画の検索・詳細閲覧ができるWebアプリケーションをReactで開発しました。

ユーザーはキーワードで映画を検索し、ポスター画像、あらすじ、キャスト情報、評価などの詳細情報を確認できます。人気映画やジャンル別の映画一覧表示機能も実装しました。

モダンなUI/UXデザインとレスポンシブレイアウトを採用し、デスクトップからモバイルまで快適な閲覧体験を提供します。`,
    category: 'Web Development',
    tags: ['React', 'JavaScript', 'TMDb API', 'Responsive Design', 'SPA'],
    year: '2020',
    status: 'completed',
    technologies: ['React', 'JavaScript', 'CSS3', 'REST API', 'Responsive Design'],
    achievements: [
      'TMDb APIの効率的な活用',
      'レスポンシブデザインの実装',
      'スムーズなアニメーション効果の実現'
    ],
    teamSize: 1,
    duration: '2週間'
  },
  'face-hiding-linebot': {
    id: 'face-hiding-linebot',
    title: '顔隠しLinebot',
    description: '送信された画像の顔部分を自動で検出し、スタンプやモザイクで隠すLINE Bot。プライバシー保護を簡単に。',
    longDescription: `顔認識技術を活用して、LINEで送信された画像の顔部分を自動で隠すBotを開発しました。

OpenCVとdlibライブラリを使用した顔検出により、複数人の顔を同時に認識し、かわいいスタンプやモザイク、ぼかし効果などで顔部分をマスキングします。LINE Messaging APIと連携し、簡単な操作で利用できます。

SNS投稿時のプライバシー保護や、子供の写真の安全な共有などに活用でき、ユーザーの個人情報保護意識の高まりに対応したサービスです。`,
    category: 'AI/ML',
    tags: ['LINE Bot', 'OpenCV', 'Face Detection', 'Privacy Protection', 'Python'],
    year: '2019',
    status: 'completed',
    technologies: ['Python', 'OpenCV', 'dlib', 'LINE Messaging API', 'Flask'],
    achievements: [
      '高精度な顔検出システムの実装',
      'LINE Messaging API連携',
      'リアルタイム画像処理の最適化'
    ],
    teamSize: 2,
    duration: '1ヶ月'
  },
  'drawing-process-video': {
    id: 'drawing-process-video',
    title: '絵描き過程動画サービス',
    description: 'イラスト制作過程を自動録画し、タイムラプス動画として出力するWebサービス。クリエイターの作業工程を可視化。',
    longDescription: `デジタルイラスト制作の過程を自動で録画し、タイムラプス動画として出力するWebサービスを開発しました。

Canvas APIを活用したリアルタイム描画キャプチャ機能により、ブラシストローク、色選択、レイヤー操作などの制作過程を詳細に記録します。録画データは効率的に圧縮され、美しいタイムラプス動画として出力されます。

SNSでの作品投稿時に制作過程を併せて公開することで、クリエイターの技術や創作プロセスをファンと共有でき、エンゲージメント向上に寄与します。`,
    category: 'Web Development',
    tags: ['Canvas API', 'Video Processing', 'Creative Tools', 'JavaScript', 'WebRTC'],
    year: '2020',
    status: 'completed',
    technologies: ['JavaScript', 'Canvas API', 'WebRTC', 'FFmpeg', 'Node.js'],
    achievements: [
      'リアルタイム描画キャプチャシステム',
      '効率的な動画圧縮アルゴリズム',
      'クリエイター向けツールの設計'
    ],
    teamSize: 3,
    duration: '2ヶ月'
  },
  'text-to-gif-service': {
    id: 'text-to-gif-service',
    title: '文字入力GIFサービス',
    description: '入力されたテキストを様々なスタイルのアニメーション文字GIFに変換するWebサービス。タイピング効果やフェード効果など多彩。',
    longDescription: `ユーザーが入力したテキストを、様々なアニメーション効果付きのGIF画像に変換するWebサービスを開発しました。

タイピング効果、フェードイン・アウト、回転、バウンス、ネオン効果など、豊富なアニメーションスタイルを提供します。フォント、色、背景、速度などのカスタマイズも可能で、SNSやメッセージアプリで使用できる個性的なGIFを簡単に作成できます。

Canvas APIとWebGL技術を活用し、ブラウザ上でリアルタイムにアニメーションをレンダリングし、最適化されたGIFファイルとして出力します。`,
    category: 'Web Development',
    tags: ['GIF Generation', 'Animation', 'Canvas API', 'WebGL', 'Text Processing'],
    year: '2019',
    status: 'completed',
    technologies: ['JavaScript', 'Canvas API', 'WebGL', 'GIF.js', 'CSS Animations'],
    achievements: [
      '多彩なテキストアニメーション効果',
      '高効率なGIF生成システム',
      'リアルタイムプレビュー機能'
    ],
    teamSize: 2,
    duration: '3週間'
  },
  'twitter-sentiment-analyzer': {
    id: 'twitter-sentiment-analyzer',
    title: 'Twitter感情値判定サービス',
    description: 'Twitterの投稿内容から感情を分析し、ポジティブ・ネガティブ・ニュートラルに分類するWebアプリ。自然言語処理技術を活用。',
    longDescription: `自然言語処理技術を活用して、Twitterの投稿内容から感情を分析するWebアプリケーションを開発しました。

MeCabによる形態素解析と感情辞書を組み合わせ、日本語ツイートの感情値（ポジティブ・ネガティブ・ニュートラル）を高精度で判定します。ユーザー名やハッシュタグを指定した感情分析、時系列での感情変化の可視化も可能です。

企業のブランドモニタリングや個人のSNS投稿の振り返り、感情の可視化による心理的な気づきなど、様々な用途で活用できるツールです。`,
    category: 'AI/ML',
    tags: ['NLP', 'Sentiment Analysis', 'Twitter API', 'MeCab', 'Data Visualization'],
    year: '2018',
    status: 'completed',
    technologies: ['Python', 'MeCab', 'Twitter API', 'scikit-learn', 'D3.js'],
    achievements: [
      '日本語感情分析システムの構築',
      'Twitter API v2の効率的な活用',
      'インタラクティブな感情可視化'
    ],
    teamSize: 2,
    duration: '1ヶ月'
  },
  'caption-image-generator': {
    id: 'caption-image-generator',
    title: 'セリフ付き画像作成サービス',
    description: '画像にセリフやキャプションを簡単に追加できるWebサービス。アニメ・マンガ風のセリフ装飾や多彩なフォント効果が特徴。',
    longDescription: `画像にセリフやキャプションを簡単に追加できるWebサービスを開発しました。

アニメやマンガで使われるような吹き出しやセリフ装飾、多彩なフォント効果（縁取り、影、グラデーション）を簡単な操作で追加できます。テキストの配置、サイズ、角度も自由に調整でき、直感的なドラッグ&ドロップ操作でデザインを完成させられます。

SNSでのミーム作成、プレゼンテーション資料の作成、教育コンテンツの制作など、様々な用途で活用できるクリエイティブツールです。`,
    category: 'Web Development',
    tags: ['Image Processing', 'Canvas API', 'Typography', 'Creative Tools', 'Design'],
    year: '2020',
    status: 'completed',
    technologies: ['JavaScript', 'Canvas API', 'CSS3', 'Image Manipulation', 'Font Rendering'],
    achievements: [
      '直感的な画像編集インターフェース',
      '多彩なテキスト装飾効果の実装',
      'リアルタイムプレビュー機能'
    ],
    teamSize: 2,
    duration: '3週間'
  },
  'comprehension-assessment-app': {
    id: 'comprehension-assessment-app',
    title: '理解度判定Webアプリ（DATEAPPS2019）',
    description: 'DATEAPPS2019で発表した、学習者の理解度をAIで判定するWebアプリ。表情認識と解答分析で総合的な学習サポート。',
    longDescription: `DATEAPPS2019で発表した、学習者の理解度をAIで総合的に判定するWebアプリケーションです。

Webカメラを通じた表情認識により学習中の感情状態を分析し、解答パターンや所要時間などの学習行動データと組み合わせて、理解度を多角的に評価します。機械学習アルゴリズムにより、個人の学習特性に合わせた最適な学習方法を提案します。

教育現場でのオンライン学習支援や、個別最適化された学習体験の提供を目指したEdTechプロジェクトです。`,
    category: 'AI/ML',
    tags: ['DATEAPPS', 'EdTech', 'Computer Vision', 'Machine Learning', 'Education'],
    year: '2019',
    status: 'completed',
    technologies: ['JavaScript', 'TensorFlow.js', 'Computer Vision', 'Machine Learning', 'WebRTC'],
    achievements: [
      'DATEAPPS2019での発表',
      '表情認識による感情分析システム',
      'AIを活用した学習最適化提案'
    ],
    teamSize: 3,
    duration: '48時間'
  },
  'sleep-advisor-speaker': {
    id: 'sleep-advisor-speaker',
    title: '睡眠アドバイススマートスピーカー（JPhacks2018）',
    description: 'JPhacks2018で開発した、個人の睡眠パターンを分析して最適な睡眠アドバイスを提供するスマートスピーカーアプリ。',
    longDescription: `JPhacks2018で開発した、個人の睡眠パターンを分析して最適な睡眠アドバイスを提供するスマートスピーカーアプリケーションです。

ユーザーの睡眠データ（就寝時間、起床時間、睡眠の質）を継続的に収集・分析し、個人の生活リズムに合わせたパーソナライズされた睡眠改善アドバイスを音声で提供します。Amazon AlexaのSkillとして実装し、自然言語による対話形式でのインタラクションを実現しました。

睡眠科学の知見とAI技術を組み合わせ、健康的な睡眠習慣の形成をサポートするヘルスケアソリューションです。`,
    category: 'IoT',
    tags: ['JPhacks', 'Alexa Skill', 'Healthcare', 'Sleep Analysis', 'Voice UI'],
    year: '2018',
    status: 'completed',
    technologies: ['Node.js', 'Alexa Skills Kit', 'AWS Lambda', 'Data Analysis', 'Voice Interface'],
    achievements: [
      'JPhacks2018参加',
      'Alexaスキル開発・公開',
      'パーソナライズド睡眠分析システム'
    ],
    teamSize: 4,
    duration: '48時間'
  },
  'face-swap-app': {
    id: 'face-swap-app',
    title: '顔入れ替え権利売買アプリ',
    description: '写真の顔を入れ替える権利を売買するアプリ。旅行先の映える写真を顔を入れ替えて自分のものにできる。',
    longDescription: `SPAJAM2019で発表した、写真の顔を入れ替える権利を売買する革新的なアプリです。

旅行先の映える写真や風景写真に、自分の顔を合成することで、実際には行ったことのない場所での写真を作成できます。写真の撮影者と顔の提供者の間で権利の売買を行うマーケットプレイス機能も実装しました。

顔認識技術と画像合成技術を組み合わせ、自然な仕上がりの顔入れ替えを実現しました。`,
    category: 'Mobile App',
    tags: ['SPAJAM', 'Face Recognition', 'Image Processing', 'Marketplace', 'AI'],
    year: '2019',
    status: 'completed',
    technologies: ['Computer Vision', 'Face Detection', 'Image Synthesis', 'Mobile Development'],
    achievements: [
      'SPAJAM2019で発表',
      '顔認識・合成技術の実装',
      'マーケットプレイス機能の開発'
    ],
    teamSize: 4,
    duration: '48時間'
  },
  'color-music-app': {
    id: 'color-music-app',
    title: '物体認識音楽生成アプリ',
    description: '認識した物体のHSV色彩情報から音楽を生成するアプリ。Sechack365海外派遣チームで企業賞受賞。',
    longDescription: `Sechack365の海外派遣チームで開発した、物体認識技術と音楽生成を組み合わせた革新的なアプリです。

カメラで物体を認識し、その物体のHSV色彩情報を音楽のパラメータにマッピングすることで、リアルタイムで音楽を生成します。色の明度は音の高さに、彩度はボリュームに、色相は楽器の種類に対応させました。

SXSW2019でも発表を行い、Eluv.io企業賞を受賞しました。`,
    category: 'AI/ML',
    tags: ['Sechack365', 'Computer Vision', 'Music Generation', 'HSV', 'SXSW'],
    year: '2019',
    status: 'completed',
    technologies: ['Computer Vision', 'Audio Synthesis', 'HSV Color Space', 'Real-time Processing'],
    links: {
      blog: 'http://akisatooo.hatenablog.com/entry/2019/04/07/232752'
    },
    achievements: [
      'Sechack365海外派遣チーム参加',
      'SXSW2019で発表',
      'Eluv.io企業賞受賞'
    ],
    teamSize: 5,
    duration: '6ヶ月'
  },
  'iot-bookshelf': {
    id: 'iot-bookshelf',
    title: 'IoT本棚地震対策仕切り',
    description: '地震の時に本棚から本が落ちるのを守るIoT仕切り。普段は邪魔にならず、震度4以上の揺れを感知したらモーターで仕切りが上がる。',
    longDescription: `国際ナノ・マイクロアプリケーションコンテスト（iCAN'14）で第3位を獲得したIoT防災デバイスです。

普段は本棚に収納されていて邪魔にならないが、震度4以上の地震を感知すると自動でモーターが作動し、本が落下しないよう仕切りが立ち上がる仕組みです。

加速度センサーによる振動検知、モーター制御、省電力設計など、IoTデバイス開発の基本要素を全て含んだプロジェクトでした。`,
    category: 'IoT',
    tags: ['IoT', 'Arduino', 'Sensor', 'Motor Control', 'Disaster Prevention'],
    year: '2014',
    status: 'completed',
    technologies: ['Arduino', 'Accelerometer', 'Motor Control', '3D Printing', 'C++'],
    achievements: [
      '国際ナノ・マイクロアプリケーションコンテスト（iCAN\'14）第3位',
      'IoT防災デバイスの実用化',
      '自動制御システムの実装'
    ],
    teamSize: 3,
    duration: '4ヶ月'
  },
  'souvenir-app': {
    id: 'souvenir-app',
    title: '仙台お土産判定アプリ',
    description: '外国人観光客向けに仙台のお土産の名前を判定してくれるスマホアプリ。SPAJAM2018仙台予選で優秀賞受賞。',
    longDescription: `SPAJAM2018仙台予選で優秀賞を受賞した、外国人観光客支援アプリです。

仙台の特産品やお土産をカメラで撮影すると、画像認識技術により商品名を判定し、英語での説明や購入場所の情報を提供します。萩の月、牛タン、ずんだ餅など、仙台の代表的なお土産を網羅しました。

全脳アーキテクチャ若手の会東北支部のメンバーとして参加し、観光業界でのAI活用の可能性を実証しました。`,
    category: 'Mobile App',
    tags: ['SPAJAM', 'Image Recognition', 'Tourism', 'Mobile App', 'AI'],
    year: '2018',
    status: 'completed',
    technologies: ['Computer Vision', 'Mobile Development', 'Image Classification', 'API Integration'],
    achievements: [
      'SPAJAM2018仙台予選 優秀賞受賞',
      '外国人観光客支援システムの開発',
      '仙台お土産データベースの構築'
    ],
    teamSize: 4,
    duration: '48時間'
  },
  'dj-motion-app': {
    id: 'dj-motion-app',
    title: 'モーションDJアプリ',
    description: 'スマホでDJ体験ができるアプリ。スマホ端末の加速度、角速度からモーションを把握し、曲を選択、変調を加える。',
    longDescription: `JPhacks2017仙台予選で発表したモーション認識DJアプリです。

スマートフォンの加速度センサーと角速度センサーを活用し、手の動きやスマホの傾きを認識してDJプレイを可能にします。縦に振ると音量調整、横に傾けるとエフェクト適用、回転させると曲の切り替えなど、直感的な操作を実現しました。

誰でも気軽にDJ体験ができるアプリとして、音楽とテクノロジーの融合を体現したプロジェクトです。`,
    category: 'Mobile App',
    tags: ['JPhacks', 'Motion Recognition', 'Audio Processing', 'Music', 'Sensor'],
    year: '2017',
    status: 'completed',
    technologies: ['Motion Sensors', 'Audio Processing', 'Mobile Development', 'Real-time Processing'],
    achievements: [
      'JPhacks2017仙台予選参加',
      'モーション認識DJ システムの開発',
      '直感的な音楽制御インターフェースの実現'
    ],
    teamSize: 4,
    duration: '48時間'
  }
}

export async function generateStaticParams() {
  return Object.keys(projectsData).map((slug) => ({
    slug: slug,
  }))
}

interface PageProps {
  params: {
    slug: string
  }
}

export default function WorkDetailPage({ params }: PageProps) {
  const { slug } = params
  const project = projectsData[slug]

  if (!project) {
    notFound()
  }

  const statusColors = {
    completed: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    'in-progress': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    concept: 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
  }

  const statusLabels = {
    completed: '完了',
    'in-progress': '進行中',
    concept: 'コンセプト'
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container-custom">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link 
            href="/works" 
            className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
          >
            ← Works に戻る
          </Link>
        </nav>

        {/* Header */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
              {project.title}
            </h1>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[project.status]}`}>
              {statusLabels[project.status]}
            </span>
          </div>
          
          <p className="text-xl text-gray-700 dark:text-gray-200 mb-6">
            {project.description}
          </p>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-600 dark:text-gray-400">
            <div>
              <span className="font-medium">年:</span> {project.year}
            </div>
            {project.teamSize && (
              <div>
                <span className="font-medium">チームサイズ:</span> {project.teamSize}人
              </div>
            )}
            {project.duration && (
              <div>
                <span className="font-medium">期間:</span> {project.duration}
              </div>
            )}
            <div>
              <span className="font-medium">カテゴリ:</span> {project.category}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Description */}
            <Card variant="glass" className="mb-8">
              <CardHeader>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  📝 プロジェクト詳細
                </h2>
              </CardHeader>
              <CardContent>
                <div className="prose prose-gray dark:prose-invert max-w-none">
                  {project.longDescription.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-gray-700 dark:text-gray-200 mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            {project.achievements && (
              <Card variant="glass" className="mb-8">
                <CardHeader>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    🏆 成果・実績
                  </h2>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {project.achievements.map((achievement, index) => (
                      <li 
                        key={index}
                        className="flex items-start gap-3 text-gray-700 dark:text-gray-200"
                      >
                        <span className="text-teal-600 mt-1">✓</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Technologies */}
            <Card variant="glass">
              <CardHeader>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  💻 技術スタック
                </h3>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 text-sm rounded-md font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tags */}
            <Card variant="glass">
              <CardHeader>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  🏷️ タグ
                </h3>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-2 py-1 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 text-xs rounded-md"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Links */}
            {project.links && (
              <Card variant="glass">
                <CardHeader>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    🔗 関連リンク
                  </h3>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {project.links.demo && (
                      <StaticButton 
                        variant="primary" 
                        size="sm" 
                        href={project.links.demo}
                        className="w-full justify-center"
                      >
                        🎮 デモを見る
                      </StaticButton>
                    )}
                    {project.links.github && (
                      <StaticButton 
                        variant="ghost" 
                        size="sm" 
                        href={project.links.github}
                        className="w-full justify-center"
                      >
                        📁 GitHub
                      </StaticButton>
                    )}
                    {project.links.blog && (
                      <StaticButton 
                        variant="ghost" 
                        size="sm" 
                        href={project.links.blog}
                        className="w-full justify-center"
                      >
                        📝 ブログ記事
                      </StaticButton>
                    )}
                    {project.links.presentation && (
                      <StaticButton 
                        variant="ghost" 
                        size="sm" 
                        href={project.links.presentation}
                        className="w-full justify-center"
                      >
                        📊 発表資料
                      </StaticButton>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Related Projects */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            他のプロジェクト
          </h2>
          <div className="text-center">
            <StaticButton variant="primary" size="lg" href="/works">
              全プロジェクトを見る
            </StaticButton>
          </div>
        </div>
      </div>
    </div>
  )
}
