"use client";

import { useState } from 'react';
import { WalletTitle } from './wallet-title';
import { WalletActions } from './wallet-actions';
import { UserAvatarsSection } from './users-avatars-section';
import { TabNavigation } from './tab-navigation';

export function WalletHeader() {

  return (
    <div className="px-6 py-2  bg-white">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
        <WalletTitle />
        <WalletActions />
      </div>

      <div className="mb-6">
        <UserAvatarsSection />
      </div>
    </div>
  );
}
