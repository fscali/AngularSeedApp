class nodejs_from_source
{

  package { "build-essential":
      ensure  => present,
	  require => Exec["apt-get update"]
    }

  file { "/usr/local/src/node-latest/":
    mode   => 777,
    ensure => "directory"
  }
  exec { "download-nodejs-source":
    command => "/usr/bin/wget  http://nodejs.org/dist/node-latest.tar.gz",
    cwd     => "/usr/local/src/",
    creates => "/usr/local/src/node-latest.tar.gz",
    require => File['/usr/local/src/node-latest/']
  }
  exec { "prepare-build-folder":
    command => "/bin/tar xzf /usr/local/src/node-latest.tar.gz --directory=node-latest --strip-components=1",
    cwd     => "/usr/local/src/",
    creates => "/usr/local/src/node-latest/configure",
    require => Exec["download-nodejs-source"]
  }
  exec { "build-nodejs":
    command => "/usr/bin/make -C /usr/local/src/node-latest",
    cwd     => "/usr/local/src/",
    creates => "/usr/local/src/node-latest/out/Release/node",
	timeout => 0,	
    require => [ Exec["prepare-build-folder"], Package["build-essential"] ]
  }
  exec { "install-nodejs-build-artifact":
    command => "/usr/bin/make -C /usr/local/src/node-latest install",
    cwd     => "/usr/local/src/",
    creates => "/usr/local/bin/node",
    require => Exec["build-nodejs"]
  }
  exec { "install_phantomjs":
    command => "npm install -g phantomjs",
    path => "/usr/bin:/usr/sbin:/bin:/usr/local/bin",
    #refreshonly => true,
    require => Exec["install-nodejs-build-artifact"]
  }
  exec { "install_karma":
    command      => "npm install -g karma",
    path         => "/usr/bin:/usr/sbin:/bin:/usr/local/bin",
    #refreshonly => true,
    require      => Exec["install-nodejs-build-artifact"]
  }
  exec { "install_dependencies":
    command => "npm install",
    cwd     => "/home/vagrant/dev",
    path    => "usr/bin:/usr/sbin:/bin:/usr/local/bin",
    require => Exec["install-nodejs-build-artifact"]
  }

}