import '@src/app/globals.css';

import '../styles/custom.scss';

interface LayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export default async function RootLayout({ children }: LayoutProps) {
  return children;
}
