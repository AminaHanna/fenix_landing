import { SidebarProvider } from '../../context/sidebarContext';

export default function FlightSchoolLayout({ children }) {
  return (
    <SidebarProvider>
      {children}
    </SidebarProvider>
  );
}
