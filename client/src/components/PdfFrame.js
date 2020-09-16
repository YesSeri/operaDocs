import React from 'react';
import Viewer, { Worker, defaultLayout, SpecialZoomLevel } from '@phuocng/react-pdf-viewer';
import '@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css';

const renderToolbar = (toolbarSlot) => {
  return (
    <div
      style={{
        alignItems: 'center',
        display: 'flex',
        width: '100%',
      }}
    >
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          flexGrow: 1,
          flexShrink: 1,
          justifyContent: 'center',
        }}
      >
        <div style={{ padding: '0 2px' }}>{toolbarSlot.previousPageButton}</div>
        <div style={{ padding: '0 2px' }}>
          {toolbarSlot.currentPage + 1} / {toolbarSlot.numPages}
        </div>
        <div style={{ padding: '0 2px' }}>{toolbarSlot.nextPageButton}</div>
        <div style={{ padding: '0 2px' }}>{toolbarSlot.zoomOutButton}</div>
        <div style={{ padding: '0 2px' }}>{toolbarSlot.zoomPopover}</div>
        <div style={{ padding: '0 2px' }}>{toolbarSlot.zoomInButton}</div>
        <div style={{ padding: '0 2px' }}>{toolbarSlot.downloadButton}</div>
      </div>
    </div>
  );
};

const layout = (isSidebarOpened, container, main, toolbar, sidebar) => {
  return defaultLayout(
    isSidebarOpened,
    container,
    main,
    toolbar(renderToolbar),
    sidebar
  );
};

export default function PdfFrame({ filename }) {
  const downloadLink = `https://singcademy.com/wp-content/uploads/pdfsToBeAccessed/${filename}`; // `https://singcademy.com/wp-content/uploads/pdfsToBeAccessed/${filename}`;
  const frameStyles = { height: '100vh', width: '100vw' };
  return (
    // <>

    // <embed style={frameStyles} src={downloadLink}>
    // </embed>
    // </>
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.4.456/build/pdf.worker.min.js">
      <div style={{ height: '100vh' }}>
        <Viewer fileUrl={downloadLink} layout={layout} 
        defaultScale={SpecialZoomLevel.PageFit}
        />
      </div>
    </Worker>
  );
}
