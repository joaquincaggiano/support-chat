const NoContactSelected = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center p-8">
      <div className="w-16 h-16 rounded-full bg-muted/20 flex items-center justify-center mb-4">
        <svg className="w-8 h-8 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      </div>
      <h2 className="text-xl font-semibold mb-2">No contact selected</h2>
      <p className="text-muted-foreground text-center">
        Please select a contact from the list to start a conversation
      </p>
    </div>
  )
}

export default NoContactSelected