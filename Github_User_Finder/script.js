//get DOM elements
const searchInput = document.querySelector('input[type="text"]');
const searchButton = document.querySelector('button');
const avatar = document.querySelector('.w-32.h-32.rounded-full');
const usernameElement = document.querySelector('.text-2xl.font-semibold');
const bioElement = document.querySelector('.flex-1 > .text-gray-600.mt-2');
const statsElements = document.querySelectorAll('.grid.grid-cols-3 .text-xl');
const metaElements = document.querySelectorAll('.space-y-2 p');
const reposContainer = document.getElementById('repos-container');
const profileCard = document.getElementById('profile-card');
const errorMessage = document.getElementById('error-message');
const loadingSpinner = document.getElementById('loading-spinner');
const profileLink = document.getElementById('profile-link');
const reposSection = document.getElementById('repos-section');

function fetchUserData(username){
    return fetch(`https://api.github.com/users/${username}`).then((raw) => raw.json());
}

function fetchUserRepos(username){
    return fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`).then((raw) => raw.json());
}

function showLoading() {
    loadingSpinner.classList.remove('hidden');
    profileCard.classList.add('hidden');
    errorMessage.classList.add('hidden');
    reposSection.classList.add('hidden');
}

function hideLoading() {
    loadingSpinner.classList.add('hidden');
}

function showError(message) {
    errorMessage.classList.remove('hidden');
    errorMessage.querySelector('p').textContent = message;
    profileCard.classList.add('hidden');
    reposSection.classList.add('hidden');
}

function updateUI(data) {
    profileCard.classList.remove('hidden');
    errorMessage.classList.add('hidden');
    
    // Update avatar
    avatar.style.backgroundImage = `url(${data.avatar_url})`;
    avatar.style.backgroundSize = 'cover';
    avatar.style.backgroundPosition = 'center';
    
    // Update username with link
    usernameElement.textContent = data.name || data.login;
    profileLink.href = data.html_url;
    profileLink.target = '_blank';
    
    // Update bio
    bioElement.textContent = data.bio || 'No bio available';
    
    // Update stats
    statsElements[0].textContent = data.public_repos;
    statsElements[1].textContent = data.followers;
    statsElements[2].textContent = data.following;
    
    // Update meta info
    metaElements[0].innerHTML = `<span class="font-medium text-gray-800">📍 Location:</span> ${data.location || 'Not available'}`;
    metaElements[1].innerHTML = `<span class="font-medium text-gray-800">🏢 Company:</span> ${data.company || 'Not available'}`;
    metaElements[2].innerHTML = `<span class="font-medium text-gray-800">📝 Public Gists:</span> ${data.public_gists}`;
    
    // Add Twitter if available
    if (data.twitter_username) {
        const twitterInfo = document.createElement('p');
        twitterInfo.innerHTML = `<span class="font-medium text-gray-800">🐦 Twitter:</span> <a href="https://twitter.com/${data.twitter_username}" target="_blank" class="text-blue-600 hover:underline">@${data.twitter_username}</a>`;
        metaElements[2].parentElement.appendChild(twitterInfo);
    }
}

function displayRepos(repos) {
    reposContainer.innerHTML = '';
    reposSection.classList.remove('hidden');
    
    if (repos.length === 0) {
        reposContainer.innerHTML = '<p class="text-gray-500 text-center py-8">No public repositories found</p>';
        return;
    }
    
    repos.forEach(repo => {
        const repoCard = document.createElement('div');
        repoCard.className = 'bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition';
        
        repoCard.innerHTML = `
            <div class="flex items-start justify-between">
                <div class="flex-1">
                    <a href="${repo.html_url}" target="_blank" class="text-lg font-semibold text-blue-600 hover:underline">
                        ${repo.name}
                    </a>
                    <p class="text-gray-600 text-sm mt-2 line-clamp-2">
                        ${repo.description || 'No description available'}
                    </p>
                    <div class="flex items-center gap-4 mt-3 text-sm text-gray-500">
                        ${repo.language ? `<span class="flex items-center gap-1">
                            <span class="w-3 h-3 rounded-full bg-blue-500"></span>
                            ${repo.language}
                        </span>` : ''}
                        <span>⭐ ${repo.stargazers_count}</span>
                        <span>🍴 ${repo.forks_count}</span>
                    </div>
                </div>
            </div>
        `;
        
        reposContainer.appendChild(repoCard);
    });
}

async function searchUser() {
    const username = searchInput.value.trim();
    
    if (!username) {
        alert('Please enter a username');
        return;
    }
    
    showLoading();
    
    try {
        const [userData, reposData] = await Promise.all([
            fetchUserData(username),
            fetchUserRepos(username)
        ]);
        
        if (userData.message === 'Not Found') {
            showError('User not found. Please try another username.');
            hideLoading();
            return;
        }
        
        hideLoading();
        updateUI(userData);
        displayRepos(reposData);
        
    } catch (error) {
        hideLoading();
        showError('Something went wrong. Please try again later.');
        console.error('Error:', error);
    }
}

searchButton.addEventListener('click', searchUser);

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchUser();
    }
});

// Load a default profile on page load (optional)
// window.addEventListener('DOMContentLoaded', () => {
//     searchInput.value = 'octocat';
//     searchUser();
// });